import React from 'react';
import {connect} from 'react-redux';

import {fetchMyRoutes} from '../../actions/route_actions';
import {createWorkout, updateWorkout
} from '../../actions/workout_actions';
import RouteDropDown from './route_dropdown';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      body: '',
      startTime: '',
      routeId: null,
      duration: 0,
      distance: 0,
    };
  }

  render () {
    return (
      <div className='content-container'>
        <div className='workout-form-container'>
          <h1>log a workout</h1>
          <div className='title-container'><i class="fas fa-dumbbell"></i>
            <p>
              if you've been active get credit for it!
              Add your workout details below,
              and stay on top of your fitness goals
            </p>
          </div>

          <form className='workout-form'>
            <div className='row-container'>
              <label id='title'>Workout name
                <input/>
              </label>
              <label id='date'>Date
                <input type='date'/>
              </label>
            </div>
            <label id='start-time'>Start time
              <input type='time' placeholder='HH:MM AM'/>
            </label>
            <label >How did it go?
              <textarea />
            </label>
          </form>

          <form className='workout-detail-form'>
            <label>Route
              <div className='route-drop-down'>
                <RouteDropDown />
              </div>
            </label>
            <label>
              Duration
              <div className='row-container'>
                <input className='time-box' placeholder='hh'/><p>:</p>
                <input className='time-box' placeholder='mm'/><p>:</p>
                <input className='time-box' placeholder='ss'/>
              </div>
            </label>
            <label>Distance
              <input/>
            </label>
            <label>Pace
              <div className='row-container'>
                <input className='time-box' placeholder='mm'/><p>:</p>
                <input className='time-box' placeholder='ss'/><p>min/mi</p>
              </div>
            </label>
          </form>
          <button className='workout-button save'>save</button>
        </div>
      </div>
    );
  }
}

export default WorkoutForm;
