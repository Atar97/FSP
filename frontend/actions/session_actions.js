import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const success = payload => {
  dispatch(clearErrors);
  dispatch(receiveCurrentUser(payload));
};

const failure = errorResponse => {
  const errors = errorResponse.responseJSON;
  dispatch(receiveErrors(errors));
};

const createThunkAction = callback => user => dispatch => {
  return callback(user).then(success, failure);
};

export const logout = createThunkAction(SessionUtil.logout);
export const login = createThunkAction(SessionUtil.login);
export const signup = createThunkAction(SessionUtil.signup);
export const demoUser = createThunkAction(SessionUtil.demoUser);
