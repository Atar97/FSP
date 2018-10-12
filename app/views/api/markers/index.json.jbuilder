@markers.sort_by {|marker| marker.sequence}
json.array! @markers do |marker|
  json.extract! marker, :id, :sequence, :lat, :lng, :route_id, :last
end
