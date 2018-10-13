export const currentUser = ({session, entities: {users}}) => (
  users[session.id]);

export const distanceInMeters = ({ui: {routeDistance}}) => {

};
