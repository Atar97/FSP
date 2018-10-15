json.set! workout.id do
  json.extract! workout, :id, :title, :date, :body, :route_id,
     :distance, :duration, :user_id
  json.startTime workout.start_time.to_formatted_s(:time_response)
end
