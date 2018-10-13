import React from 'react';

import RouteMap from './route_map';

class CreateMap extends RouteMap {
  constructor(props) {
    super(props);
    this.distance = google.maps.geometry.spherical.computeDistanceBetween;
  }

  componentDidMount() {
    this.defaultMount();
    this.map.addListener('click', this.addLinePoint.bind(this));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.center !== this.props.center) {
      this.map.panTo(this.props.center);
    }
  }

  addLinePoint(event) {
    let routePath = this.routeLine.getPath();
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
