import {RECEIVE_SELECTED_ROUTE} from '../../actions/workout_actions';

export default (state = {selectedRouteId: null}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED_ROUTE:
      return {selectedRouteId: action.routeId};
    default:
      return state;
  }
};
