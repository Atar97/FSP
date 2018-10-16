import React from 'react';
import {inMiles} from '../../reducers/selectors';
// import {toggleClass} from '../../util/html_util';

export default class RouteDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultRoute: (
        <span className='default-route'>Select:
          <i className="fa fa-caret-down" aria-hidden="true"></i></span>
      )
    }
  }

  openDropdown(event) {
    const routeList = document.getElementById('routes');
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', () =>  routeList.classList.add('hidden'))
    if (!event.target.getAttribute('seq')) {
      console.log('closed')
      routeList.classList.remove('hidden');
    }
  }

  selectRoute(event) {
    const route = this.props.routes[event.currentTarget.getAttribute('seq')]
    this.setState({defaultRoute: (
      <div value={route.id} className='selected-route'>
        <span>{inMiles(route.distance)} <p>mi</p></span>
        <div>
          <strong>{route.name}</strong>
          <p>{route.city}</p>
        </div>
        <button className='clear-route' onClick]{this.clearRoute.bind(this)}>
          <i className="fas fa-times"></i> Clear Route</button>
      </div>
    )})
    document.getElementById('routes').classList.add('hidden');
  }

  render() {
    const {routes} = this.props;
    return (
      <div className='route-dropdown' onClick={this.openDropdown.bind(this)}>
        {this.state.defaultRoute}
        <div id='routes' className='hidden'>
          {routes.map((route, idx) => {
            return (
              <div key={route.id} value={route.id} seq={idx}
                className='route-dropdown-item'
                onClick={this.selectRoute.bind(this)}>
                <strong>{route.name}</strong>
                <p>{inMiles(route.distance)} mi in {route.city}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
