import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Redirect, Switch} from 'react-router-dom';

import {
  SignupFormContainer,
  LoginFormContainer
  } from './users/form_container';

// All the components
import NavBar from './shared/nav_bar';
import Footer from './shared/footer';
import Splash from './shared/splash';
import RouteIndex from './routes/route_index';
import RouteDetail from './routes/route_detail';
import RouteCreate from './routes/route_create';
import WorkoutForm from './workouts/workout_form';

export default () => (
  <div>
    <NavBar />
    <div className='main-content'>
      <Switch>
        <AuthRoute exact path='/' component={Splash}/>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <ProtectedRoute path='/routes/my_routes' component={RouteIndex} />
        <ProtectedRoute path='/routes/create' component={RouteCreate} />
        <ProtectedRoute path='/routes/:route_id' component={RouteDetail} />
        <ProtectedRoute path='/workouts/create' component={WorkoutForm} />
        <Redirect to='/' />
      </Switch>
    </div>
    <Footer/>
  </div>
);
