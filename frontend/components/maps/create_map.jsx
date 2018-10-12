import React from 'react';
import {connect} from 'react-redux';

import RouteMap from './route_map';

class CreateMap extends RouteMap {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.defaultMount();
    this.map.addListener('click', this.addLinePoint.bind(this));
  }

  addLinePoint(event) {
    let routePath = this.routeLine.getPath();
    routePath.push(event.latLng);
    const marker = this.markerManager.createMarker(event.latLng);
    this.props.receiveMarker(marker);
  }

}

export default CreateMap;
