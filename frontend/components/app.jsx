import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import {
  SignupFormContainer,
  LoginFormContainer
  } from './users/form_container';

export default () => (
  <div>
    <h1>Plot my Plod</h1>
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
  </div>
);
