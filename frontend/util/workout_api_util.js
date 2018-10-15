export const fetchUserWorkouts = (userId) => (
  $.ajax({
    url: `api/users/${userId}/workouts`,
    method: 'GET'
  })
);

export const createWorkout = workout => (
  $.ajax({
    url: `api/workouts`,
    method: 'POST',
    data: workout
  })
);

export const fetchWorkout = id => (
  $.ajax({
    url: `api/workouts/${id}`,
    method: 'GET'
  })
);

export const updateWorkout = workout => (
  $.ajax({
    url: `api/workouts/${workout.workout.id}`,
    method: 'PATCH',
    data: workout
  })
);

export const destroyWorkout = id => (
  $.ajax({
    url: `api/workouts/${id}`,
    method: 'DELETE'
  })
);
