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
import WorkoutDetail from './workouts/workout_detail';
import WorkoutIndex from './workouts/workout_index';
import DashboardIndex from './dashboard/dashboard_index';

export default () => {
  return (
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
          <ProtectedRoute path='/workouts/index' component={WorkoutIndex} />
          <ProtectedRoute path='/workouts/create' component={WorkoutForm} />
          <ProtectedRoute path='/workouts/:workout_id' component={WorkoutDetail} />
          <ProtectedRoute path='/dashboard' component={DashboardIndex} />
          <Redirect to='/dashboard' />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}
