import React from 'react';
import {connect} from 'react-redux';

import CreateMap from '../maps/create_map';
import CreateButtons from '../maps/create_buttons';
import CreateOptions from './create_options';
import {receiveMarker} from '../../actions/marker_actions';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='route-creation-container'>
        <CreateOptions markers={this.props.markers}/>
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
});

const mStP = state => ({
  markers: state.entities.markers,
});

export default connect(mStP, mDtP)(RouteCreate);
