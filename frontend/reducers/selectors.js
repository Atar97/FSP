export const currentUser = ({session, entities: {users}}) => (
  users[session.id]);

export const distanceInMiles = ({ui: {routeDistance}}) => {
  const milesDistance = routeDistance / 1609;
  debugger;
  return Math.round((milesDistance + 0.00001) * 100) / 100;
};
