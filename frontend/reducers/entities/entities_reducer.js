import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';
import markerReducer from './markers_reducer';

export default combineReducers({
  users: usersReducer,
  routes: routesReducer,
  markers: markerReducer
});
