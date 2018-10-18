export function findMapDimensions(markers) {
  let bounds = new google.maps.LatlngBounds();
  markers.forEach(marker => {
    debugger;
    bounds.extend(marker.position)
  })
  return bounds;
}
