export function findMapDimensions(markers) {
  let bounds = new google.maps.LatlngBounds();
  markers.forEach(marker => {
    bounds.extend(marker.position)
  })
  return bounds;
}
