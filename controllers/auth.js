const { passport } = require('../config');
const User = require('../models/user');
const userUtils = require('../utils/user-utils');
const validationUtils = require('../utils/validation-utils');
const { ERRORS } = require('../constants');

const { standardizeUser, generateJWT, getRole } = userUtils;
const { responseValidator } = validationUtils;

/**
 * createTokenCtx  - Creates JWT info for ctx.body
 * @param {Object} user User object to convert to generate JWT with
 */
const createTokenCtx = (user) => {
  const tokenData = generateJWT(user);

  return {
    token: `JWT ${tokenData.token}`,
    tokenExpiration: tokenData.expiration,
    user: standardizeUser(user)
  };
};


/**
 * jwtAuth  - Attempts to authenticate a user via a JWT in the Authorization
 *            header.
 */
exports.jwtAuth = (ctx, next) => passport.authenticate('jwt', async (err, payload) => {
  const epochTimestamp = Math.round((new Date()).getTime() / 1000);

  // If there is no payload, inform the user they are not authorized to see the content
  if (!payload) {
    ctx.status = 401;
    ctx.body = { errors: { error: ERRORS.JWT_FAILURE }, jwtExpired: true };
    // Check if JWT has expired, return error if so
  } else if (payload.exp <= epochTimestamp) {
    ctx.status = 401;
    ctx.body = { errors: { error: ERRORS.JWT_EXPIRED }, jwtExpired: true };
  } else {
    // Add user to state
    ctx.state.user = payload;
    await next();
  }
})(ctx, next);

/**
 * login  - Attempts to login a user with an email address and password
 *              using PassportJS (http://passportjs.org/docs)
 */
exports.login = (ctx, next) => passport.authenticate('local', async (err, user) => {
  if (!user || !Object.keys(user).length) {
    ctx.status = 401;
    ctx.body = { errors: [{ error: ERRORS.BAD_LOGIN }] };
    await next();
  } else {
    ctx.body = Object.assign(ctx.body || {}, createTokenCtx(user));
    await next();
  }
})(ctx, next);


/**
 * register - Attempts to register a new user, if a user with that email
 *            address does not already exist.
 */
exports.register = async (ctx, next) => {
  console.log(ctx.request.body);
  // Check for registration errors
  const validation = responseValidator(ctx.request.body, [
    { name: 'email', required: true },
    { name: 'password', required: true }
  ]);

  if (validation && validation.length && validation[0].error) {
    ctx.status = 422;
    ctx.body = { errors: validation };
    await next();
  }

  const { email, password } = validation;

  if (email && password) {
    const formattedEmail = email.toLowerCase();
    try {
      let user = await User.findOne({ email: formattedEmail });

      if (user !== null) {
        ctx.status = 422;
        ctx.body = { errors: [{ error: ERRORS.ALREADY_REGISTERED }] };
        await next();
      } else {
        user = new User({
          password,
          email
        });

        const savedUser = await user.save();
        ctx.body = Object.assign(ctx.body || {}, createTokenCtx(savedUser));
        await next();
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  }
};

/**
 * requireRole  - Ensures a user has a high enough role to access an endpoint
 */
exports.requireRole = async role =>
  async (ctx, next) => {
    const { user } = ctx.state.user;
    try {
      const foundUser = await User.findById(user.id);
      // If the user couldn't be found, return an error
      if (!foundUser) {
        ctx.status = 404;
        ctx.body = { errors: [{ error: ERRORS.USER_NOT_FOUND }] };
      } else {
        // Otherwise, continue checking role
        if (getRole(user.role) >= getRole(role)) {
          await next();
        }

        ctx.status = 403;
        ctx.body = { errors: [{ error: ERRORS.NO_PERMISSION }] };
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  };

/**
 * getAuthenticatedUser  - Returns JSON for the authenticated user
 */
exports.getAuthenticatedUser = async (ctx, next) => {
  const user = await User.findById(ctx.state.user.id);
  ctx.status = 200;
  ctx.body = { user: standardizeUser(user) };
  await next();
};
