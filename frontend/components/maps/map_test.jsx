import React from 'react';
import {connect} from 'react-redux';
import {fetchMarkersforRoute} from '../../actions/marker_actions';
import {fetchMapImage} from '../../util/map_api_util';

class MapTest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null
    }
  }

  componentDidMount() {
    const {fetchMarkersforRoute, markers} = this.props;
    fetchMarkersforRoute(14)
    .then(res => {
      debugger;
      fetchMapImage(markers, '600x600', '-33.9582756273208,18.416178040909017', 11)
    }
  }

  render() {
    return this.state.map
  }
}

const mDtP = dispatch => ({
  fetchMarkersforRoute: id => dispatch(fetchMarkersforRoute(id)),
  // fetchMapImage: id => dispatch(fetchMarkersforRoute(id)),
})

const mStP = state => ({
  markers: state.entities.markers,
})

export default connect(mStP, mDtP)(MapTest);


//MapApi.fetchMapImage(getState().entities.markers, '600x600', '-33.9582756273208,18.416178040909017', 11)
//dispatch(MarkerActions.fetchMarkersforRoute(14))
