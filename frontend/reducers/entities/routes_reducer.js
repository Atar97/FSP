import {RECEIVE_ROUTES, REMOVE_ROUTE
} from '../../actions/route_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTES:
      return action.payload;
    case REMOVE_ROUTE:
      const newState = Object.assign({}, state);
      delete newState[action.routeId];
      debugger;
      return newState;
    default:
      return state;
  }
};
