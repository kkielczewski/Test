import _ from 'lodash';
import { APP_NAMESPACE } from '../../utils/redux-constants';
import { get, post } from '../../utils/http-utils';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../utils/store-utils';
import { getAppUrl } from '../../utils/environment-utils';

const AUTH_ENDPOINT_BASE = 'auth';
const typeBase = `${APP_NAMESPACE}/${AUTH_ENDPOINT_BASE}/`;

// Constants
export const CHANGE_AUTH = `${typeBase}CHANGE_AUTH`;
export const SET_POST_AUTH_PATH = `${typeBase}SET_POST_AUTH_PATH`;
export const GET_AUTHENTICATED_USER = `${typeBase}GET_AUTHENTICATED_USER`;

// Actions
export const changeAuthentication = payload => dispatch => dispatch({
  type: CHANGE_AUTH,
  payload
});

/**
 * login - Authenticate a user with an email and password
 * @param {Object} credentials  Login credentials (email, password)
 */
export const login = (credentials, desiredPath) => async (dispatch) => {
  try {
    const response = await post(dispatch, CHANGE_AUTH, `${AUTH_ENDPOINT_BASE}/login`, credentials, false);

    // If the login was successful, set the JWT as a cookie
    if (response) {
      setCookie('token', 'jwt', { maxAge: 3600 });

      if (desiredPath) {
        window.location.href = `${getAppUrl()}${desiredPath}`;
      } else {
        window.location.href = `${getAppUrl()}/`;
      }
    }
  } catch (err) {
    await handleError(dispatch, err, CHANGE_AUTH);
  }
};

/**
 * register - Creates a new account for a user
 * @param {Object} formData  User's form data
 */
export const register = formData => async (dispatch) => {
  try {
    const response = await post(dispatch, CHANGE_AUTH, `${AUTH_ENDPOINT_BASE}/register`, formData, false);

    // If the registration was successful, set the JWT as a cookie
    if (response) {
      setCookie('token', 'jwt', { maxAge: 3600 });
      window.location.href = `${getAppUrl()}/`;
    }
  } catch (err) {
    await handleError(dispatch, err, CHANGE_AUTH);
  }
};

/**
 * setPostAuthPath  - Save Desired Pre-Auth Path to State
 * @param {String} payload  The desired path, saved pre-authentication
 * @returns {function}
 */
export const setPostAuthPath = payload => dispatch => dispatch({
  type: SET_POST_AUTH_PATH,
  payload
});

/**
 * logoutUser  - Log user out by clearing auth state and token cookie
 */
export const logoutUser = () => (dispatch) => {
  dispatch({ type: CHANGE_AUTH, payload: {} });
  deleteCookie('token');

  window.location.href = `${getAppUrl()}/login`;
};

/**
 * getAuthenticatedUser - Retrieves the logged in user's information
 * @returns {Promise}
 */
export const getAuthenticatedUser = () => async (dispatch) => {
  try {
    const response = await get(dispatch, GET_AUTHENTICATED_USER, `${AUTH_ENDPOINT_BASE}/profile`, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, GET_AUTHENTICATED_USER);
  }
};
/* eslint-enable */
// Store
const INITIAL_STATE = {
  authenticated: Boolean(getCookie('token')),
  user: '',
  ...buildGenericInitialState([CHANGE_AUTH, SET_POST_AUTH_PATH, GET_AUTHENTICATED_USER])
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return updateStore(state, action, { authenticated: Boolean(_.get(action, 'payload.token')), user: _.get(action, 'payload.user.id') });
    case GET_AUTHENTICATED_USER:
      return updateStore(state, action, { user: _.get(action, 'payload.user.id') });
    default:
      return state;
  }
};
