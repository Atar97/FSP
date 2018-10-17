@workouts.each do |workout|
    json.partial! 'workout', workout: workout
end
