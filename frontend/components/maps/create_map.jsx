import React from 'react';
import {connect} from 'react-redux';

import RouteMap from './route_map';

class CreateMap extends RouteMap {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.defaultMount();
    this.map.addListener('rightclick', this.handleClick.bind(this));
    this.map.addListener('click', this.addLinePoint.bind(this));
  }

  handleClick(event) {
    this.markerManager.createMarker(event.latLng);
  }

  addLinePoint(event) {
    let routePath = this.routeLine.getPath();

    routePath.push(event.latLng);

    this.markerManager.createMarker(event.latLng);
  }

}

export default CreateMap;
