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
    const icon = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/WhiteDot.svg',
      scaledSize: new google.maps.Size(10, 10),
      anchor: new google.maps.Point(5, 5)
    };
    const marker = new google.maps.Marker({
      position: geoPosition,
      map: this.map,
      icon,
    });
    return marker;
  }

}
