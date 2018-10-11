import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import routeErrorsReducer from './route_errors_reducer';

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  routeErrors: routeErrorsReducer
});
