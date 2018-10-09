import {connect} from 'react-redux';

import Form from './form';
import {login, signup} from '../../actions/session_actions';

const loginState = (state, ownProps) => ({
  formType: 'login'
});

const signupState = (state, ownProps) => ({
  formType: 'signup'
});

const dispatchCreator = callback => dispatch => ({
  sendForm: (user) => dispatch(callback(user))
});

export const SignupFormContainer = connect(
  signupState, dispatchCreator(signup))(Form);

export const LoginFormContainer = connect(
  loginState, dispatchCreator(login))(Form);
