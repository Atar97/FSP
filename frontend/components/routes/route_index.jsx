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
        <header className='main-header'>
          <h1>my routes</h1>
          <Link to='/routes/create/' className='create-route'>create a route</Link>
        </header>
        <ul className='route-list vertical-box-center'>
          <li><header className='minor-header'>Minor header</header></li>

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
