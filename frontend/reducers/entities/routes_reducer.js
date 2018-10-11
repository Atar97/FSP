import {RECEIVE_ROUTES} from '../../actions/route_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTES:
      return action.payload;
    default:
      return state;
  }
};
