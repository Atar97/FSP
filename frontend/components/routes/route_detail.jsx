import {connect} from 'react-redux';
import React from 'react';

import {fetchRoute} from '../../actions/route_actions';

class RouteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.route_id;
  }

  componentDidMount() {
    this.props.fetchRoute(this.id);
  }

  render () {
    return (
      <h1>{this.id}</h1>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: (id) => dispatch(fetchRoute(id))
});

const mapStateToProps = state => ({
  route: state.entities.route
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetail);
