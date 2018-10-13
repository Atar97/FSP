import React from 'react';

import MarkerManager from '../../util/marker_manager';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  defaultMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(
      document.getElementById('map'),
      mapOptions);
    this.routeLine = new google.maps.Polyline({
      strokeColor: '#EC2626',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    this.routeLine.setMap(this.map);
    this.markerManager = new MarkerManager(this.map);
  }

  componentDidMount() {
    this.defaultMount();
    const routeLine = this.routeLine;
    const map = this.map;
    this.props.markers.forEach(marker => {
      marker.setMap(map);
      routeLine.getPath().push(marker.position);
    });
  }

  render() {
    return <div id='map'></div>;
  }
}

export default RouteMap;
