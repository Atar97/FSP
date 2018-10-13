export const currentUser = ({session, entities: {users}}) => (
  users[session.id]);

export const distanceInMiles = ({ui: {routeDistance}}) => {
  const milesDistance = routeDistance / 1609;
  return Math.round(milesDistance * 100) / 100;
};
