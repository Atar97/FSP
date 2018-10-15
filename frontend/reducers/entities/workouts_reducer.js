import {RECEIVE_WORKOUTS, REMOVE_WORKOUT,
} from '../../actions/workout_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return action.payload;
    case REMOVE_ROUTE:
      const newState = Object.assign({}, state);
      delete newState[action.workoutId];
      return newState;
    default:
      return state;
  }
};
