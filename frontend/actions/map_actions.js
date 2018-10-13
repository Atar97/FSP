export const RECEIVE_CENTER = 'RECEIVE_CENTER';
export const RECEIVE_ADDRESS = 'RECEIVE_ADDRESS';
import * as MapAPIUtil from '../util/map_api_util';

export const receiveCenter = center => ({
  type: RECEIVE_CENTER,
  center
});

export const receiveAddress = address => ({
  type: RECEIVE_ADDRESS,
  address
});

export const fetchLocation = address => dispatch => {
  return MapAPIUtil.fetchLocation(address)
    .then(res => dispatch(
      receiveCenter(res.results[0].geometry.location)));
};

export const fetchAddress = latLng => dispatch => {
  return MapAPIUtil.fetchAddress(latLng)
    .then(res => {
        return dispatch(
          receiveAddress(res.results[0].address_components));
      }
    );
};
