import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route} from 'react-router-dom';

import {
  SignupFormContainer,
  LoginFormContainer
  } from './users/form_container';
import NavBar from './shared/nav_bar';

export default () => (
  <div>
    <Route path='/' component={NavBar} />
    <div className='main-content'>
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
  </div>
);
