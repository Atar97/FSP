export default class MarkerManager {
  constructor(map) {
    this.map = map;
  }

  removeMarkers(markers) {
    markers.forEach(marker => {
      marker.setMap(null);
    });
  }

  createMarker(geoPosition) {
    const marker = new google.maps.Marker({
      position: geoPosition,
      map: this.map,
    });
    return marker;
  }

}
