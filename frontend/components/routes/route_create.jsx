import React from 'react';
import {connect} from 'react-redux';

import CreateMap from '../maps/create_map';
import CreateButtons from '../maps/create_buttons';
import CreateOptions from './create_options';
import {receiveMarker, createMarkers} from '../../actions/marker_actions';
import {
  createRoute,
  receiveRouteDistance
} from '../../actions/route_actions';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      markers,
      createMarkers,
      createRoute,
      routeDistance,
      receiveMarker,
      receiveRouteDistance} = this.props;
    return (
      <div className='route-creation-container'>
        <CreateOptions markers={markers}
          createMarkers={createMarkers}
          createRoute={createRoute}/>
        <div className='big-map'>
          <CreateButtons markers={markers}
            routeDistance={routeDistance}/>
          <CreateMap receiveMarker={receiveMarker}
            receiveRouteDistance={receiveRouteDistance}/>
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
});

const mStP = state => ({
  markers: state.entities.markers,
  routeDistance: state.ui.distance,
});

export default connect(mStP, mDtP)(RouteCreate);
