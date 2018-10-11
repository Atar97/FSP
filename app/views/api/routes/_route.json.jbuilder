json.set! route.id do
  json.extract! route, :id, :name, :creator_id, :city, :created_at
end
