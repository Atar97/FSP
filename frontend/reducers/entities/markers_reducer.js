import {
  RECEIVE_MARKER,
  RECEIVE_MARKERS
} from '../../actions/marker_actions';
import MarkerManager from '../../util/marker_manager';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MARKER:
      const newState = Array.from(state);
      newState.push(action.marker);
      return newState;
    case RECEIVE_MARKERS:
      const markerManager = new MarkerManager(null);
      const newState1 = action.markers.map(marker => {
        const position = new google.maps.LatLng(marker.lat, marker.lng);
        const gmapMarker = markerManager.createMarker(position);
        gmapMarker.setTitle(marker.sequence.toString());
        return gmapMarker;
      });
      return newState1;
    default:
      return state;
  }
};
