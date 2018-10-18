json.set! workout.id do
  json.extract! workout, :id, :title, :date, :body, :route_id,
     :distance, :duration, :user_id
  if workout.start_time
    json.startTime workout.start_time.to_formatted_s(:time_response)
  else
    json.startTime nil
  end
  json.createdDate workout.created_at.to_formatted_s(:api_response)
end
