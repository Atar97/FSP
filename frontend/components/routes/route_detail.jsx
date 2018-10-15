import {connect} from 'react-redux';
import React from 'react';

import {fetchRoute} from '../../actions/route_actions';
import {fetchMarkersforRoute, receiveMarkers
} from '../../actions/marker_actions';
import ShowMap from '../maps/show_map';
import {receiveCenter} from '../../actions/map_actions';

class RouteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.route_id;
  }

  componentDidMount() {
    const {fetchRoute, fetchMarkersforRoute} = this.props;
    fetchRoute(this.id);
  }

  render () {
    const self = this.props.route[this.id];
    const {
      markers, center, receiveCenter,
      fetchMarkersforRoute, receiveMarkers,
    } = this.props;
    if (self && self.creator) {
      const milesDistance = self.distance / 1609;
      const mi =  Math.round(milesDistance * 100) / 100;
      const creator = `${self.creator.fname} ${self.creator.lname}`;
      return (
        <div className='route-detail-container'>
          <h1>{self.name}</h1>
          <div className='description'>
            <div className='distance-box'>
              <strong>distance</strong>
              <h2>{mi}</h2>
              <p>miles</p>
              <div className='run'>run</div>
            </div>
            <ul className='details'>
              <li><strong>begins in:</strong><p>{self.city}</p></li>
              <li><strong>created by:</strong><p>{creator}</p></li>
              <li><strong>description:</strong>
                <p>
                  This is a {mi} mi Run in {self.city}. This route
                  was created by {creator} on {self.createdDate}.
                </p>
            </li>
              <li><strong>type:</strong><p>RUN</p></li>
            </ul>
          </div>
          <div className='small-map'>
            <ShowMap markers={markers}
              center={center}
              receiveCenter={receiveCenter}
              fetchMarkersforRoute={fetchMarkersforRoute}
              routeId={this.id} receiveMarkers={receiveMarkers}/>
          </div>
        </div>
      );
    }
    return (
      <h1>Loading</h1>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: (id) => dispatch(fetchRoute(id)),
  fetchMarkersforRoute: (id) => dispatch(fetchMarkersforRoute(id)),
  receiveCenter: (center) => dispatch(receiveCenter(center)),
  receiveMarkers: markers => dispatch(receiveMarkers(markers)),
});

const mapStateToProps = state => ({
  route: state.entities.routes,
  markers: state.entities.markers,
  center: state.ui.maps.center,
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetail);
