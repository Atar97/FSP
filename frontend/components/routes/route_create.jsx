import React from 'react';
import {connect} from 'react-redux';

import CreateMap from '../maps/create_map';
import RouteTools from '../maps/route_tools';
import RouteForm from './route_form';
import {receiveMarker, createMarkers, receiveMarkers, popMarker
} from '../../actions/marker_actions';
import {createRoute, receiveRouteDistance, clearDistance
} from '../../actions/route_actions';
import {distanceInMiles} from '../../reducers/selectors.js';
import {fetchLocation, receiveCenter, fetchAddress
} from '../../actions/map_actions';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      markers, createMarkers,
      createRoute, routeDistance,
      receiveMarker, receiveRouteDistance,
      miles, clearDistance, fetchLocation,
      center, receiveCenter, fetchAddress,
      address, receiveMarkers, popMarker
      } = this.props;
    return (
      <div className='route-creation-container'>

        <RouteForm markers={markers}
          createMarkers={createMarkers} createRoute={createRoute}
          routeDistance={routeDistance} clearDistance={clearDistance}
          fetchLocation={fetchLocation} receiveCenter={receiveCenter}
          fetchAddress={fetchAddress} address={address}
          receiveMarkers ={receiveMarkers}/>

        <div className='big-map'>

          <RouteTools markers={markers} miles={miles}
            popMarker={popMarker} receiveMarkers={receiveMarkers}
            clearDistance={clearDistance}
            receiveRouteDistance={receiveRouteDistance}/>

          <CreateMap receiveMarker={receiveMarker} markers={markers}
            receiveRouteDistance={receiveRouteDistance}
            center={center} receiveCenter={receiveCenter}
            receiveMarkers={receiveMarkers}/>
        </div>
      </div>
    );
  }
}

const mDtP = dispatch => ({
  receiveMarker: marker => dispatch(receiveMarker(marker)),
  receiveMarkers: markers => dispatch(receiveMarkers(markers)),
  popMarker: () => dispatch(popMarker()),
  createRoute: route => dispatch(createRoute(route)),
  createMarkers: (markers, routeId) => dispatch(createMarkers(markers, routeId)),
  receiveRouteDistance: distance => dispatch(receiveRouteDistance(distance)),
  clearDistance: () => dispatch(clearDistance()),
  fetchLocation: address => dispatch(fetchLocation(address)),
  fetchAddress: latLng => dispatch(fetchAddress(latLng)),
  receiveCenter: center => dispatch(receiveCenter(center)),
});

const mStP = state => ({
  markers: state.entities.markers,
  miles: distanceInMiles(state),
  routeDistance: state.ui.routeDistance,
  center: state.ui.maps.center,
  address: state.ui.maps.address,
});

export default connect(mStP, mDtP)(RouteCreate);
