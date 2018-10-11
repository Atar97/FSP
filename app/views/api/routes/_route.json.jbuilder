json.set! route.id do
  json.extract! route, :id, :name, :creator_id, :city, :distance
  json.createdDate route.created_at.to_formatted_s(:api_response)
end
