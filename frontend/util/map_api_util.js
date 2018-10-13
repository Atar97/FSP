// 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
export const fetchLocation = addressStr => (
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw`,
    method: 'GET',
  })
);

export const fetchAddress = latLng => (
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw`,
    method: 'GET'
  })
);
