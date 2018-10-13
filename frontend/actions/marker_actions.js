export const RECEIVE_MARKERS = 'RECEIVE_MARKERS';
export const REMOVE_MARKER = 'REMOVE_MARKER';
export const RECEIVE_MARKER = 'RECEIVE_MARKER';

import * as APIUtil from '../util/marker_api_util';

export const receiveMarkers = markers => ({
  type: RECEIVE_MARKERS,
  markers
});

export const receiveMarker = marker => ({
  type: RECEIVE_MARKER,
  marker
});

export const removeMarker = () => ({
  type: REMOVE_MARKER
});

const success = (res) => {
  debugger;
  dispatch(receiveMarkers(res));
};

export const createMarkers = (markers, routeId) => dispatch => (
  APIUtil.sendDownMarkers(markers, routeId).then(success)
);

export const fetchMarkersforRoute = routeId => dispatch => (
  APIUtil.fetchMarkersforRoute(routeId).then(success)
);
