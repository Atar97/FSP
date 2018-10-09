import {combineReducers} from 'redux';
import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors/errors_reducer';
// import uiReducer from './ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});
