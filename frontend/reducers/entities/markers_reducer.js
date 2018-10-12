import {
  RECEIVE_MARKER,
  RECEIVE_MARKERS
} from '../../actions/marker_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MARKER:
      const newState = Array.from(state);
      newState.push(action.marker);
      return newState;
    case RECEIVE_MARKERS:
      return action.markers;
    default:
      return state;
  }
};
