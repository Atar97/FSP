import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import RouteIndexItem from './route_index_item';
import {fetchMyRoutes, destroyRoute} from '../../actions/route_actions';

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
          <li> <ul className='minor-header'>
                <li className='route attribute-box'>ID</li>
                <li className='created attribute-box'>Created</li>
                <li className='distance attribute-box'>distance</li>
                <li className='name attribute-box'>name</li>
                <li className='city attribute-box'>city</li>
                <li className='options attribute-box'>options</li>
            </ul></li>

          {this.props.routes.map((route, idx) => (
            <RouteIndexItem key={route.id} idx={idx} route={route}
              destroyRoute={this.props.destroyRoute}/>
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
  destroyRoute: (routeId) => dispatch(destroyRoute(routeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
