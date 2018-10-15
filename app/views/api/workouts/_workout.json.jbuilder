json.set! workout.id do
  json.extract! workout, :id, :title, :date, :body, :route_id,
     :distance, :duration, :user_id
end
