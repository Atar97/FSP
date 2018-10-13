// 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
export const fetchAddress = addressStr => (
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw`,
    method: 'GET',
  })
);
