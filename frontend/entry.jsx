import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

//begin test
import {login, logout, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  const store = configureStore({});

  // start test
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.austin = {user: {email: 'austin', password: 'password'}};
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end test

  ReactDOM.render(
    <Root store={store}/>,
    rootEl
  );

});
