import {RECEIVE_ROUTE_DISTANCE} from '../../actions/route_actions';

export default (state = {distance: 0}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_DISTANCE:
      return {distance: state.distance + action.distance};
    default:
      return state;
  }
};
