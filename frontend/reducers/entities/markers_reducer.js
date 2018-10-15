import {
  RECEIVE_MARKER,
  RECEIVE_MARKERS,
  POP_MARKER
} from '../../actions/marker_actions';
import MarkerManager from '../../util/marker_manager';

export default (state = [], action) => {
  Object.freeze(state);
  let newState = Array.from(state);

  switch (action.type) {
    case RECEIVE_MARKER:
      newState.push(action.marker);
      return newState;

    case RECEIVE_MARKERS:
      const markerManager = new MarkerManager(null);
      newState = action.markers.map(marker => {
        const position = new google.maps.LatLng(marker.lat, marker.lng);
        const gmapMarker = markerManager.createMarker(position);
        gmapMarker.setTitle(marker.sequence.toString());
        return gmapMarker;
      });
      return newState;

    case POP_MARKER:
      newState.pop();
      return newState;

    default:
      return state;
  }
};
