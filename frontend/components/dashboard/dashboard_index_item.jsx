import React from 'react';
import {Link} from 'react-router-dom';

import {inMiles, timeConversion} from '../../reducers/selectors';

class DashboardIndexItem extends React.Component {

}


export class Route extends DashboardIndexItem {

  constructor(props) {
    super(props)
  }

  handleClick(event) {
    const id = event.currentTarget.getAttribute('value');
    this.props.history.push(`routes/${id}`)
  }

  render() {
    const {route} = this.props;
    return (
      <li className='route-list-item' value={route.id}
        onClick={this.handleClick.bind(this)}>
        <img />
        <div className='route-description'>
          <p>{route.name}</p>
          <p>{inMiles(route.distance)} mi</p>
        </div>
      </li>
    )
  }
}

export class Workout extends DashboardIndexItem {

  constructor(props) {
    super(props)
  }

  render() {
    const {workout} = this.props;
    return (
      <li>
        <div className='workout-title'>
          <Link to={`/workouts/${workout.id}`}>{workout.title}</Link>
          <p>Distance</p>
          <strong>{inMiles(workout.distance)} <p className='mi'>mi</p></strong>
        </div>
        <div className='workout-duration'>
          <p>duration</p>
          <strong>{timeConversion(workout.duration)}</strong>
        </div>
        <div className='workout-date'>
          <strong>{workout.createdDate}</strong>
          <p>Activity</p>
          <i className="fas fa-running"></i>
        </div>
      </li>
    )
  }
}
