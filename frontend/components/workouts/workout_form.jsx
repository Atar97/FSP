import React from 'react';
import {connect} from 'react-redux';

import {fetchMyRoutes} from '../../actions/route_actions';
import {createWorkout, updateWorkout, receiveSelectedRoute
} from '../../actions/workout_actions';
import RouteDropDown from './route_dropdown';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    const d = new Date();
    this.state = {
      title: '',
      date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
      body: '',
      startTime: '12:00',
      routeId: null,
      hrs: '',
      min: '',
      sec: '',
      distance: '',
      pace: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.getPace = this.getPace.bind(this);
  }

  handleSubmit(event) {
    const {
      match, createWorkout,
      editWorkout, selectedRouteId} = this.props;
    event.preventDefault();
    const data = Object.assign({}, this.state);
    data.distance = data.distance * 1609;
    data.duration = this.getDuration();
    if (match.params.id) {

    } else {
      createWorkout({workout: data});
    }

  }

  componentDidMount() {
    this.props.fetchMyRoutes()
  }

  handleChange(dataField) {
    return event => {
      this.setState({[dataField]: event.target.value}, () => {
        if (this.getPace()) {
          this.setState({pace: this.getPace()});
        }
      });
    };
  }

  componentDidUpdate() {
    const {myRoutes, selectedRouteId} = this.props;
    if (selectedRouteId) {
      this.state.distance = myRoutes[selectedRouteId].distance
      console.log(this.state.distance);
    }
  }

  getDuration() {
    const {hrs, sec, min} = this.state;
    return (hrs * 3600) + (min * 60) + sec;
  }

  getPace() {
    if (this.getDuration() && this.state.distance) {
      return Number(this.getDuration()) / Number(this.state.distance);
    }
  }

  render () {
    const {title, date, body, startTime, sec,
      routeId, hrs, min, distance, pace} = this.state;
    return (
      <div className='content-container'>
        <div className='workout-form-container'>
          <h1>log a workout</h1>
          <div className='title-container'><i className="fas fa-dumbbell"></i>
            <p>
              if you've been active get credit for it!
              Add your workout details below,
              and stay on top of your fitness goals
            </p>
          </div>

          <form className='workout-form'>
            <div className='row-container'>
              <label id='title-container'>Workout name
                <input id='title' onChange={this.handleChange('title')}
                  value={title}/>
              </label>
              <label id='date-container'>Date
                <input id='date' type='date' value={date}
                  onChange={this.handleChange('date')}/>
              </label>
            </div>
            <label>Start time
              <input type='time' placeholder='HH:MM AM'
                value={startTime}
                onChange={this.handleChange('startTime')}/>
            </label>
            <label >How did it go?
              <textarea value={body}
                onChange={this.handleChange('body')}/>
            </label>
          </form>

          <form className='workout-detail-form'>
            <label>Route
              <div className='route-drop-down'>
                <RouteDropDown routes={Object.values(this.props.myRoutes)}
                  receiveSelectedRoute={this.props.receiveSelectedRoute}/>
              </div>
            </label>
            <label>
              Duration
              <div className='row-container'>
                <input onChange={this.handleChange('hrs')}
                  className='time-box' placeholder='hh' value={hrs}
                  type='number' max='23' min='0'/><p>:</p>
                <input onChange={this.handleChange('min')}
                  className='time-box' placeholder='mm' value={min}
                  type='number' max='59' min='0'/><p>:</p>
                <input onChange={this.handleChange('sec')}
                  className='time-box' placeholder='ss' value={sec}
                  type='number' max='59' min='0'/>
              </div>
            </label>
            <label>Distance
              <input type='number' min='0' step='.01' placeholder='0 mi'
                onChange={this.handleChange('distance')}
                value={distance}/>
            </label>
            <label>Pace
              <div className='row-container'>
                <input disabled className='time-box' placeholder='mm'
                  type='number' max='59' min='0'
                  value={Math.round(Number(pace) / 60)}/><p>:</p>
                <input disabled className='time-box' placeholder='ss'
                  type='number' max='59' min='0'
                  value={Math.round((Number(pace) % 60))}/><p>min/mi</p>
              </div>
            </label>
          </form>
          <button onClick={this.handleSubmit.bind(this)}
            className='workout-button save'>save</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  updateWorkout: (workout) => dispatch(updateWorkout(workout)),
  fetchMyRoutes: () => dispatch(fetchMyRoutes()),
  receiveSelectedRoute: routeId => dispatch(receiveSelectedRoute(routeId))
});

const mapStateToProps = state => ({
  myRoutes: state.entities.routes,
  selectedRouteId: state.ui.workouts.selectedRouteId,
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
