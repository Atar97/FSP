import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Redirect, Switch} from 'react-router-dom';

import {
  SignupFormContainer,
  LoginFormContainer
  } from './users/form_container';
import NavBar from './shared/nav_bar';
import Footer from './shared/footer';
import Splash from './shared/splash';

export default () => (
  <div>
    <NavBar />
    <div className='main-content'>
      <Switch>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <Route exact path='/' component={Splash}/>
        <Redirect to='/' />
      </Switch>
    </div>
    <Footer/>
  </div>
);
