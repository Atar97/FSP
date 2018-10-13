import {combineReducers} from 'redux';
import routeDistanceReducer from './route_distance_reducer';

export default combineReducers({
  routeDistance: routeDistanceReducer,
});
