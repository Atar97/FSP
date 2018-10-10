import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route} from 'react-router-dom';

import {
  SignupFormContainer,
  LoginFormContainer
  } from './users/form_container';
import NavBar from './shared/nav_bar';
import Footer from './shared/footer';
import Splash from './shared/splash';

export default () => (
  <div>
    <Route path='/' component={NavBar} />
    <div className='main-content'>
      <Route exact path='/' component={Splash}/>
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
    <Route path='/' component={Footer}/>
  </div>
);
