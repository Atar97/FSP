import React from 'react';

import RouteMap from './route_map';

class CreateMap extends RouteMap {
  constructor(props) {
    super(props);
    this.distance = google.maps.geometry.spherical.computeDistanceBetween;
    this.props.receiveMarkers([]);
  }

  componentDidMount() {
    this.defaultMount();
    this.map.addListener('click', this.addLinePoint.bind(this));
  }

  componentDidUpdate(prevProps) {
    const path = this.props.markers.map(marker => marker.position);
    this.state.routeLine.setPath(path);
    if (prevProps.center !== this.props.center) {
      this.map.panTo(this.props.center);
      this.map.setZoom(12);
    }
  }

  addLinePoint(event) {
    const routePath = this.state.routeLine.getPath();
    routePath.push(event.latLng);
    const pathLeng = routePath.length;
    if (pathLeng > 1) {
      const newDistance = this.distance(
        routePath.getArray()[pathLeng - 1],
        routePath.getArray()[pathLeng - 2]);
      this.props.receiveRouteDistance(newDistance);
    }
    const marker = this.markerManager.createMarker(event.latLng);
    this.props.receiveMarker(marker);
  }

}

export default CreateMap;
