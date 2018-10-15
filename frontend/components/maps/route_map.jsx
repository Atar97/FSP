import React from 'react';
import {connect} from 'react-redux';

import MarkerManager from '../../util/marker_manager';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routeLine: new google.maps.Polyline({
        strokeColor: '#EC2626',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })
    };
    this.props.receiveMarkers([]);
  }

  defaultMount(zoom = 4) {
    const mapOptions = {
      center: this.props.center,
      zoom
    };
    this.map = new google.maps.Map(
      document.getElementById('map'),
      mapOptions);
    this.state.routeLine.setMap(this.map);
    this.markerManager = new MarkerManager(this.map);
    // this.setState({routeLine: this.makeMarkers()});
  }

  componentDidMount() {
    this.defaultMount();
  }

  makeMarkers() {
    debugger;
    const routeLine = this.state.routeLine;
    const map = this.map;
    this.props.markers.forEach(marker => {
      marker.setMap(map);
      routeLine.getPath().push(marker.position);
    });
    return routeLine;
  }

  // componentWillReceiveProps(prevProps) {
  //   this.makeMarkers();
  // }

  render() {
    return <div id='map'></div>;
  }
}

export default RouteMap;
