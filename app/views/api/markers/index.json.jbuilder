@markers.sort_by do |marker|
  marker.sequence
end
json.array! @markers do |marker|
  json.extract! marker, :id, :sequence, :lat, :lng, :route_id, :last
end
