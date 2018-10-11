import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

//begin test
import * as RouteApi from './actions/route_actions';
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
  window.RouteApi = RouteApi;
  window.newRoute = {route: {name: 'new', distance: '42', city: 'San Fran'}};
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end test

  ReactDOM.render(
    <Root store={store}/>,
    rootEl
  );

});
