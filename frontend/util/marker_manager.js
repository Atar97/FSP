export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  removeMarkers() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    });
    this.markers = [];
  }

  createMarker(geoPosition) {
    const marker = new google.maps.Marker({
      position: geoPosition,
      map: this.map,
    });
    this.markers.push(marker);
    return marker;
  }

}
