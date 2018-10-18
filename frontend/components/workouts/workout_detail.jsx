import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchWorkout, destroyWorkout} from '../../actions/workout_actions';
import {fetchRoute} from '../../actions/route_actions';
import {fetchMarkersforRoute, receiveMarkers
} from '../../actions/marker_actions';
import {receiveCenter, center} from '../../actions/map_actions';
import ShowMap from '../maps/show_map';
import {inMiles, timeConversion} from '../../reducers/selectors';

class WorkoutDetail extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workout_id);
  }

  renderPace() {
    const {workout: {distance, duration}} = this.props
    const secPerMile = duration / inMiles(distance);
    const min = Math.floor(secPerMile / 60);
    let sec = Math.round(secPerMile - (60 * min));
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${min}:${sec}`;
  }

  renderDuration(duration) {
    return timeConversion(duration)
  }

  destroy() {
    this.props.destroyWorkout(this.props.match.params.workout_id)
    .then(this.props.history.push('/workouts/'))
  }

  render() {
    const {
      center, markers, workout,
      fetchMarkersforRoute, receiveMarkers, match
    } = this.props;
    let map;
    if (workout && workout.routeId) {
      map = <ShowMap fetchMarkersforRoute={fetchMarkersforRoute}
            receiveCenter={receiveCenter} center={center} markers={markers}
            routeId={workout.routeId} receiveMarkers={receiveMarkers}/>
    }
    if (workout){
      return (
        <div className='content-container'>
          <div className='workout-detail-container'>
            <h1 className='title'>{workout.title}</h1>
            <ul className='workout-details'>
              <li><h3>distance</h3>
                <strong>{inMiles(workout.distance)} <p>mi</p></strong></li>
              <li><h3>duration</h3>
                <strong>{this.renderDuration(workout.duration)}</strong></li>
              <li><h3>avg pace</h3>
                <strong>{this.renderPace()}</strong></li>
            </ul>
            <div className='button-list'>
              <Link className='button-style small'
                to={`/workouts/edit/${match.params.workout_id}`}>edit</Link>
              <p className='button-style small gray-button'
                onClick={this.destroy.bind(this)}>delete</p>
              <Link className='button-style small'
                to='/workouts/create'>create workout</Link>
            </div>
          </div>
          <div className='map-container'>
            <header className='route-details'></header>
            <div className='map'>
              {map}
            </div>
          </div>
        </div>
      );
    }
    return <h1>Loading Workout</h1>
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  fetchRoute: id => dispatch(fetchRoute(id)),
  destroyWorkout: id => dispatch(destroyWorkout(id)),
  fetchMarkersforRoute: id => dispatch(fetchMarkersforRoute(id)),
  receiveCenter: center => dispatch(receiveCenter(enter)),
  receiveMarkers: markers => dispatch(receiveMarkers(markers)),
});

const mapStateToProps = (state, ownProps) => ({
  workout: state.entities.workouts[ownProps.match.params.workout_id],
  center: state.ui.maps.center,
  markers: state.entities.markers,
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail);
