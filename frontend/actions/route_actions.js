import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';
export const RECEIVE_ROUTE_DISTANCE = 'RECEIVE_ROUTE_DISTANCE';
export const CLEAR_DISTANCE = 'CLEAR_DISTANCE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

export const receiveRoutes = payload => ({
  type: RECEIVE_ROUTES,
  payload
});

export const receiveRouteErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

export const receiveRouteDistance = distance => ({
  type: RECEIVE_ROUTE_DISTANCE,
  distance,
});

export const clearDistance = () => ({
  type: CLEAR_DISTANCE
});

export const removeRoute = routeId => ({
  type: REMOVE_ROUTE,
  routeId
});

const success = (res) => {
  return dispatch(receiveRoutes(res));
};

const failure = res => {
  return dispatch(receiveRouteErrors(res.responseJSON));
};

const createThunkAction = callback => input => dispatch => {
  return callback(input).then(success, failure);
};

export const destroyRoute = (routeId) => dispatch => {
  return RouteAPIUtil.destroyRoute(routeId)
    .then(() => dispatch(removeRoute(routeId)), failure);
};

export const fetchRoute = createThunkAction(RouteAPIUtil.fetchRoute);
export const createRoute = createThunkAction(RouteAPIUtil.createRoute);
export const updateRoute = createThunkAction(RouteAPIUtil.updateRoute);
export const fetchAllRoutes = createThunkAction(RouteAPIUtil.fetchAllRoutes);
export const fetchMyRoutes = createThunkAction(RouteAPIUtil.fetchMyRoutes);
