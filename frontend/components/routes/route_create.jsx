import React from 'react';
import {connect} from 'react-redux';

import CreateMap from '../maps/create_map';
import CreateButtons from '../maps/create_buttons';
import CreateOptions from './create_options';
import {receiveMarker, createMarkers} from '../../actions/marker_actions';
import {createRoute} from '../../actions/route_actions';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='route-creation-container'>
        <CreateOptions markers={this.props.markers}
          createMarkers={this.props.createMarkers}
          createRoute={this.props.createRoute}/>
        <div className='big-map'>
          <CreateButtons markers={this.props.markers}/>
          <CreateMap receiveMarker={this.props.receiveMarker}/>
        </div>
      </div>
    );
  }
}

const mDtP = dispatch => ({
  receiveMarker: marker => dispatch(receiveMarker(marker)),
  createRoute: route => dispatch(createRoute(route)),
  createMarkers: (markers, routeId) => dispatch(createMarkers(markers, routeId))
});

const mStP = state => ({
  markers: state.entities.markers,
});

export default connect(mStP, mDtP)(RouteCreate);
