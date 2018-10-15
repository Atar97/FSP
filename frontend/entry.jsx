import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

//begin test
import * as WorkoutApi from './util/workout_api_util';
// end test

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser.id) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore({});
  }
  // start test
  window.workout = {userId: 110, title: 'a new route', startTime: '19:21',
    body: 'such a good workout', routeId: 75, distance: 12260,
    duration: 600, date: '15/10/18'};
  window.newWorkout = {body: "such a good workout",
    date: "15/10/18",
    distance: 12260,
    duration: 600,
    id: 6,
    routeId: 75,
    startTime: null,
    title: "updated new route",
    userId: 110}
  window.WorkoutApi = WorkoutApi;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end test

  ReactDOM.render(
    <Root store={store}/>,
    rootEl
  );

});
