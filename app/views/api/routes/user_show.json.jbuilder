json.set! @route.id do
  json.extract! @route, :id, :name, :creator_id, :city, :distance
  json.createdDate @route.created_at.to_formatted_s(:api_response)
  json.creator do
    json.extract! @user, :fname, :lname
  end
end
