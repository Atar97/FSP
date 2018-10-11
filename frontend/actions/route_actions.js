import * as RouteAPIUtil from '../util/route_api_util';

const success = (res) => {
  console.log(res);
};

const failure = res => {
  console.log(res);
};

const createThunkAction = callback => input => dispatch => {
  return callback(input).then(success, failure);
};

export const fetchRoute = createThunkAction(RouteAPIUtil.fetchRoute);
export const fetchMyRoutes = createThunkAction(RouteAPIUtil.fetchMyRoutes);
export const fetchAllRoutes = createThunkAction(RouteAPIUtil.fetchAllRoutes);
export const createRoute = createThunkAction(RouteAPIUtil.createRoute);
export const updateRoute = createThunkAction(RouteAPIUtil.updateRoute);
export const destroyRoute = createThunkAction(RouteAPIUtil.destroyRoute);
