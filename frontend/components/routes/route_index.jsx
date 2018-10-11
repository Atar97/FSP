import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import RouteIndexItem from './route_index_item';
import {fetchMyRoutes} from '../../actions/route_actions';

class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMyRoutes();
  }

  render() {
    return (
      <div className='route-table-container vertical-box-center'>
        <header>Main Header</header>
        <ul className='route-list vertical-box-center'>
          <li><header>Minor header</header></li>

          {this.props.routes.map(route => (
            <RouteIndexItem key={route.id} route={route}/>
          ))}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  routes: Object.values(state.entities.routes),
});

const mapDispatchToProps = dispatch => ({
  fetchMyRoutes: () => dispatch(fetchMyRoutes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
