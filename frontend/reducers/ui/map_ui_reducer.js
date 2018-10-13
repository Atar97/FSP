import {
  RECEIVE_CENTER,
  RECEIVE_ADDRESS
} from '../../actions/map_actions';

export default (state = {
  center: {lat: 41.850033, lng: -87.6500523}}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CENTER:
      return Object.assign({}, state, {center: action.center});
    case RECEIVE_ADDRESS:
      return Object.assign({}, state, {address: action.address});
    default:
      return state;
  }
};
