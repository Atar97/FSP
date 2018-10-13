import {RECEIVE_ROUTE_DISTANCE} from '../../actions/route_actions';

export default (state =  0, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_DISTANCE:
      return state + action.distance;
    default:
      return state;
  }
};
