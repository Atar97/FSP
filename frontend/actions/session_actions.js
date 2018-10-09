import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const success = payload => {
  dispatch(receiveCurrentUser(payload));
};

export const failure = errorResponse => {
  const errors = errorResponse.responseJSON;
  dispatch(receiveErrors(errors));
};

export const createThunkAction = callback => user => dispatch => {
  return callback(user).then(success, failure);
};

export const logout = createThunkAction(SessionUtil.logout);
export const login = createThunkAction(SessionUtil.login);
export const signup = createThunkAction(SessionUtil.signup);
