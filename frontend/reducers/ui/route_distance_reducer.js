import {
  RECEIVE_ROUTE_DISTANCE,
  CLEAR_DISTANCE} from '../../actions/route_actions';

export default (state =  0, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_DISTANCE:
      return state + action.distance;
    case CLEAR_DISTANCE:
      return 0;
    default:
      return state;
  }
};
