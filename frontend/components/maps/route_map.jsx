import React from 'react';

class RouteMap extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions)
  }

  render() {
    return <div id='map'></div>
  }
}

export default RouteMap;
