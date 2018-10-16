import React from 'react';
import {connect} from 'react-redux';
import {fetchWorkout} from '../../actions/workout_actions';
import {fetchRoute} from '../../actions/route_actions';
import {fetchMarkersforRoute} from '../../marker_actions';

class WorkoutDetail extends React.Component {
  render() {
    const {distance, duration, date, startTime} = this.props;
    return (
      <div className='content-container'>
        <div className='route-detail-container'>
          <h1></h1>
        </div>
      </div>
    );
  }
}
