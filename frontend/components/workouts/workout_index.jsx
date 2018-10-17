import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUserWorkouts} from '../../actions/workout_actions';

import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUserWorkouts(this.props.currentUser);
  }

  render() {
    const {workouts} = this.props;
    return (
      <div className='content-container'>
        <header className='workout-header'>
          <h1>my workouts</h1>
          <Link className='button-style gray-button big'
            to='/workouts/create'>Log a Workout</Link>
        </header>
        <div className='workout-list'>
          <ul>
            {Object.values(workouts).map(workout => {
              return <WorkoutIndexItem key={workout.id}
                workout={workout}/>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserWorkouts: id => dispatch(fetchUserWorkouts(id)),
})

const mapStateToProps = state => ({
  currentUser: state.session.id,
  workouts: state.entities.workouts,
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
