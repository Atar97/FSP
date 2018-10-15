json.workouts do
  @workouts.each do |workout|
    json.partial! 'workout', workout: workout
  end
end
