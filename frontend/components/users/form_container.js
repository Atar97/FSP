import {connect} from 'react-redux';

import UserForm from './user_form';
import {login, signup, clearErrors} from '../../actions/session_actions';

const loginState = (state, ownProps) => ({
  formType: 'login',
  errors: state.errors.sessionErrors
});

const signupState = (state, ownProps) => ({
  formType: 'signup',
  errors: state.errors.sessionErrors
});

const dispatchCreator = callback => dispatch => ({
  sendForm: (user) => dispatch(callback(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export const SignupFormContainer = connect(
  signupState, dispatchCreator(signup))(UserForm);

export const LoginFormContainer = connect(
  loginState, dispatchCreator(login))(UserForm);
