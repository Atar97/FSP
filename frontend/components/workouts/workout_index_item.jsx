import React from 'react';
import {inMiles} from '../../reducers/selectors';

export default class WorkoutIndexItem extends React.Component {


  handleClick() {
    const {history, workout} = this.props;
    history.push(`/workouts/${workout.id}`);
  }

  render() {
    const {title, distance} = this.props.workout
    return (
      <li onClick={this.handleClick.bind(this)}>
        <i className="fas fa-running"></i>
        <div className='workout-name'>
          <p>{title}</p>
          <p>{inMiles(distance)} mi</p>
        </div>
      </li>
    );
  }
}
