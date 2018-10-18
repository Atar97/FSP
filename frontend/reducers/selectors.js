export const currentUser = ({session, entities: {users}}) => (
  users[session.id]);

export const distanceInMiles = ({ui: {routeDistance}}) => {
  const milesDistance = routeDistance / 1609;
  return Math.round(milesDistance * 100) / 100;
};

export const inMiles = distance => (
  Math.round(distance / 1609 * 100) / 100
);

export const timeConversion = duration => {
  let hr = Math.floor(duration / 3600);
  duration -= hr * 3600;
  if (hr === 0) {
    hr = ''
  } else {
    hr = `${hr}:`
  }
  let min = Math.floor(duration / 60);
  duration -= min * 60;
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(duration);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${hr}${min}:${sec}`;
}

export const getDistance = state => {
  const route = state.entities.routes[state.ui.workouts.selectedRouteId];
  if (route) {
    return route.distance;
  }
  return 0;
}
