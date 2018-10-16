import React from 'react';
import {inMiles} from '../../reducers/selectors';

export default class CurrentRouteItem extends React.Component {
  constructor(props) {
    super(props)
  }

  clearRoute(e) {
    e.preventDefault();
  }

  openDropdown(event) {
    const select = document.getElementById('default-route');
    const routeList = document.getElementById('routes');
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', () => routeList.classList.add('hidden'))
    if (!event.target.getAttribute('value')) {
      routeList.classList.remove('hidden');
    }
  }

  render() {
    if (this.props.selectedRouteId) {
      const route = this.props.routes[this.props.selectedRouteId]
      return (
        <div value={route.id} className='selected-route'>
          <span>{inMiles(route.distance)} <p>mi</p></span>
          <div>
            <strong>{route.name}</strong>
            <p>{route.city}</p>
          </div>
          <p className='clear-route' onClick={this.clearRoute.bind(this)}>
            <i className="fas fa-times"></i> Clear Route</p>
        </div>
      );
    }
    return (
      <span id='default-route' onClick={this.openDropdown.bind(this)}>
        Select: <i className="fa fa-caret-down" aria-hidden="true"></i>
      </span>
    );
  }
}
