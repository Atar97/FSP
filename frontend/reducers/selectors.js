export const currentUser = ({session, entities: {users}}) => (
  users[session.id]);
