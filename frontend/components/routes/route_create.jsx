import React from 'react';
import {connect} from 'react-redux';

import CreateMap from '../maps/create_map';
import RouteTools from '../maps/route_tools';
import RouteForm from './route_form';
import {receiveMarker, createMarkers} from '../../actions/marker_actions';
import {
  createRoute,
  receiveRouteDistance,
  clearDistance
} from '../../actions/route_actions';
import {distanceInMiles} from '../../reducers/selectors.js';
import {fetchAddress, receiveCenter} from '../../actions/map_actions';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      markers, createMarkers,
      createRoute, routeDistance,
      receiveMarker, receiveRouteDistance,
      miles, clearDistance, fetchAddress,
      center, receiveCenter
      } = this.props;
    return (
      <div className='route-creation-container'>
        <RouteForm markers={markers}
          createMarkers={createMarkers}
          createRoute={createRoute}
          routeDistance={routeDistance}
          clearDistance={clearDistance}
          fetchAddress={fetchAddress}
          receiveCenter={receiveCenter}
          />
        <div className='big-map'>
          <RouteTools markers={markers}
            miles={miles}/>
          <CreateMap receiveMarker={receiveMarker}
            receiveRouteDistance={receiveRouteDistance}
            center={center} receiveCenter={receiveCenter} />
        </div>
      </div>
    );
  }
}

const mDtP = dispatch => ({
  receiveMarker: marker => dispatch(receiveMarker(marker)),
  createRoute: route => dispatch(createRoute(route)),
  createMarkers: (markers, routeId) => dispatch(createMarkers(markers, routeId)),
  receiveRouteDistance: distance => dispatch(receiveRouteDistance(distance)),
  clearDistance: () => dispatch(clearDistance()),
  fetchAddress: address => dispatch(fetchAddress(address)),
  receiveCenter: center => dispatch(receiveCenter(center)),
});

const mStP = state => ({
  markers: state.entities.markers,
  miles: distanceInMiles(state),
  routeDistance: state.ui.routeDistance,
  center: state.ui.maps.center,
});

export default connect(mStP, mDtP)(RouteCreate);
