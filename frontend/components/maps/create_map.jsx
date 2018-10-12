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
  }

  handleClick(event) {
    this.markerManager.createMarker(event.latLng);
  }

  addLinePoint(event) {
    let routePath = this.routeLine.getPath();

    path.push(event.latLng);

    this.markerManager.createMarker(event.latLng);
  }

}

export default CreateMap;
