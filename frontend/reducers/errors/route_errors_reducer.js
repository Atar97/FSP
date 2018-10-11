import {RECEIVE_ROUTE_ERRORS} from '../../actions/route_actions';
import {CLEAR_ERRORS} from '../../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
