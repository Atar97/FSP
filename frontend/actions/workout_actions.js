import * as WorkoutAPIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

export const receiveWorkouts = payload => ({
  type: RECEIVE_WORKOUTS,
  payload
});

export const receiveWorkoutErrors = errors => ({
  type: RECEIVE_WORKOUT_ERRORS,
  errors
});

export const removeWorkout = workoutId => ({
  type: REMOVE_WORKOUT,
  workoutId
});

// Thunk actions

const success = (res) => {
  return dispatch(receiveWorkouts(res));
};

const failure = res => {
  return dispatch(receiveWorkoutErrors(res.responseJSON));
};

const createThunkAction = callback => input => dispatch => {
  return callback(input).then(success, failure);
};

export const fetchUserWorkouts = createThunkAction(
  WorkoutAPIUtil.fetchUserWorkouts);
export const createWorkout = createThunkAction(
  WorkoutAPIUtil.createWorkout);
export const fetchWorkout = createThunkAction(
  WorkoutAPIUtil.fetchWorkout);
export const updateWorkout = createThunkAction(
  WorkoutAPIUtil.updateWorkout);
export const destroyWorkout = createThunkAction(
  WorkoutAPIUtil.destroyWorkout);

export const destroyRoute = (workoutId) => dispatch => {
  return RouteAPIUtil.destroyWorkout(workoutId)
    .then(() => dispatch(removeWorkout(workoutId)), failure);
};
