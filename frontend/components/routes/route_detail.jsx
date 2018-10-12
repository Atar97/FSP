import {connect} from 'react-redux';
import React from 'react';

import {fetchRoute} from '../../actions/route_actions';
import RouteMap from '../maps/route_map';

class RouteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.route_id;
  }

  componentDidMount() {
    this.props.fetchRoute(this.id);
  }

  render () {
    const self = this.props.route[this.id];
    if (self && self.creator) {
      const creator = `${self.creator.fname} ${self.creator.lname}`
      return (
        <div className='route-detail-container'>
          <h1>{self.name}</h1>
          <div className='description'>
            <div className='distance-box'>
              <strong>distance</strong>
              <h2>{self.distance}</h2>
              <p>miles</p>
              <div className='run'>run</div>
            </div>
            <ul className='details'>
              <li><strong>begins in:</strong><p>{self.city}</p></li>
              <li><strong>created by:</strong><p>{creator}</p></li>
              <li><strong>description:</strong>
                <p>
                  This is a {self.distance} mi Run in {self.city}. This route
                  was created by {creator} on {self.createdDate}.
                </p>
            </li>
              <li><strong>type:</strong><p>RUN</p></li>
            </ul>
          </div>
          <div className='small-map'>
            <RouteMap />
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
  fetchRoute: (id) => dispatch(fetchRoute(id))
});

const mapStateToProps = state => ({
  route: state.entities.routes
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetail);
