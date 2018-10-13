export const RECEIVE_CENTER = 'RECEIVE_CENTER';
import * as MapAPIUtil from '../util/map_api_util';

export const receiveCenter = center => ({
  type: RECEIVE_CENTER,
  center
});

export const fetchAddress = address => dispatch => {
  MapAPIUtil.fetchAddress(address)
    .then(res => dispatch(
      receiveCenter(res.results[0].geometry.location)));
};
