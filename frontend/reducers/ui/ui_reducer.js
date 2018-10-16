import {combineReducers} from 'redux';
import routeDistanceReducer from './route_ui_reducer';
import mapUiReducer from './map_ui_reducer';
import workoutUiReducer from './workout_ui_reducer';

export default combineReducers({
  routeDistance: routeDistanceReducer,
  maps: mapUiReducer,
  workouts: workoutUiReducer,
});
