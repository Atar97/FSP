import React from 'react';
import {inMiles} from '../../reducers/selectors';
import CurrentRouteItem from './current_route_item';

export default class RouteDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  selectRoute(event) {
    const route = this.props.routes[event.currentTarget.getAttribute('value')]
    document.getElementById('routes').classList.add('hidden');
    this.props.receiveSelectedRoute(route.id)
  }

  render() {
    const {routes, selectedRouteId, receiveSelectedRoute} = this.props;
    return (
      <div className='route-dropdown'>
        <CurrentRouteItem selectedRouteId={selectedRouteId}
          receiveSelectedRoute={receiveSelectedRoute}
          routes={routes}/>
        <div id='routes' className='hidden'>
          {Object.values(routes).map((route, idx) => {
            return (
              <div key={route.id} value={route.id}
                className='route-dropdown-item'
                onClick={this.selectRoute.bind(this)}>
                <img />
                <div>
                  <strong>{route.name}</strong>
                  <p>{inMiles(route.distance)} mi in {route.city}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
