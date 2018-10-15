import React from 'react';

import RouteMap from './route_map';

export default class ShowMap extends RouteMap {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      receiveCenter, fetchMarkersforRoute, routeId
    } = this.props;
    this.defaultMount(13);
    fetchMarkersforRoute(routeId)
    .then(() => {
      const routeLine = this.state.routeLine;
      const map = this.map;
      this.props.markers.forEach(marker => {

        marker.setMap(map);
        routeLine.getPath().push(marker.position);
      });
      if (this.props.markers[0]) {
        receiveCenter(this.props.markers[0].position);
        this.map.panTo(this.props.markers[0].position);
      }
    });
  }

}
