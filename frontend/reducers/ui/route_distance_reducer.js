import {RECEIVE_ROUTE_DISTANCE} from '../../actions/route_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_DISTANCE:
      return action.distance;
    default:
      return state;
  }
};
