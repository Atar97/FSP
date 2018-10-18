// 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
export const fetchLocation = addressStr => (
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${window.tsoachick}`,
    method: 'GET',
  })
);

export const fetchAddress = latLng => (
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${window.tsoachick}`,
    method: 'GET'
  })
);

//path=color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963|40.752946,-73.987384
export const fetchMapImage = (markers, size, center, zoom) => {
  const pathMarkers = markersToPath(markers)
  return $.ajax({
    url: `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&path=color:0x0000ff|weight:5${pathMarkers}&key=AIzaSyDfzkfK4BYKYvNKWtxv6OVb3dtTw_ML3qw`,
    method: 'GET'
  })
}

export const markersToPath = markers => {
  let path = '';
  markers.forEach(marker => {
    const lat = marker.position.lat();
    const lng = marker.position.lng();
    path += `|${lat},${lng}`
  })
  return path
}
