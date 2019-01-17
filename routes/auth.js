const Router = require('koa-router');
const authControllers = require('../controllers/auth');

const {
  jwtAuth,
  login,
  register,
  getAuthenticatedUser
} = authControllers;

const router = new Router({ prefix: '/auth' });

router.post('/register', register);
router.post('/login', login);
router.get('/profile', jwtAuth, getAuthenticatedUser);

module.exports = router;
