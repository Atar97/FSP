import React from 'react';
import {Link} from 'react-router-dom';

class DashboardIndexItem extends React.Component {

}


export class Route extends DashboardIndexItem {

  constructor(props) {
    super(props)
  }

  render() {
    const {route} = this.props;
    return (
      <li>
        <p>{route.id}</p>
      </li>
    )
  }
}

export class Workout extends DashboardIndexItem {

  constructor(props) {
    super(props)
  }

  render() {
    debugger;
    const {workout} = this.props;
    return (
      <li>
        <div>
          <Link to={`/routes/${workout.id}`}>{workout.title}</Link>
          <p>Distance</p>
          <strong>{workout.distance} <p>mi</p></strong>
        </div>
        <div>
          <p>duration</p>
          <strong>{workout.duration}</strong>
        </div>
        <div>
          <p>{workout.createdDate}</p>
          <p>Activity</p>
          <i>runner man</i>
        </div>
      </li>
    )
  }
}
