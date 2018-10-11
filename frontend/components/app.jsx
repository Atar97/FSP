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
import RouteIndex from './routes/route_index';

export default () => (
  <div>
    <NavBar />
    <div className='main-content'>
      <Switch>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <ProtectedRoute path='/routes/my_routes' component={RouteIndex} />
        <Route exact path='/' component={Splash}/>
        <Redirect to='/' />
      </Switch>
    </div>
    <Footer/>
  </div>
);
