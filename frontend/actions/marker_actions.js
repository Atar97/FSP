export const RECEIVE_MARKERS = 'RECEIVE_MARKERS';
export const REMOVE_MARKER = 'REMOVE_MARKER';

export const receiveMarkers = markers => ({
  type: RECEIVE_MARKERS,
  markers
});
export const RECEIVE_MARKER = 'RECEIVE_MARKER';

export const receiveMarker = marker => ({
  type: RECEIVE_MARKER,
  marker
});

export const removeMarker = () => ({
  type: REMOVE_MARKER
});
