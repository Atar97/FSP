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
      const newState1 = action.markers.map(marker => {
        const position = new google.maps.LatLng(marker.lat, marker.lng);
        return new google.maps.Marker({
          position, title: marker.sequence.toString()
        });
      });
      return newState1;
    default:
      return state;
  }
};
