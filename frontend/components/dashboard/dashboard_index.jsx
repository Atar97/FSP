import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Route, Workout
} from './dashboard_index_item';
import {fetchMyRoutes} from '../../actions/route_actions';
import {fetchUserWorkouts} from '../../actions/workout_actions';
import {currentUser} from '../../reducers/selectors';


class DashboardIndex extends React.Component {

  componentDidMount() {
    debugger;
    const {fetchMyRoutes, fetchUserWorkouts, currentUser} = this.props;
    fetchMyRoutes().then(fetchUserWorkouts(currentUser.id));
  }

  render() {
    const {workouts, routes} = this.props;
    return (
      <div className='content-container'>
        <div className='dashboard-index'>
          <div className='workouts list'>
            <header>
              <h1>Recent Workouts</h1>
              <Link to='/workouts'>View All</Link>
            </header>
            <ul>
              {workouts.map(workout => {
                return <Workout key={workout.id}
                  workout={workout} />
              })}
            </ul>
          </div>
          <div className='list routes'>
            <header>
              <h1>Recent Routes</h1>
              <Link to='/my_routes'>View All</Link>
            </header>
            <ul>
              {routes.map(route => {
                return <Route key={route.id}
                  route={route} />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  routes: Object.values(state.entities.routes).slice(0, 10),
  workouts: Object.values(state.entities.workouts).slice(0, 10),
  currentUser: currentUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchMyRoutes: () => dispatch(fetchMyRoutes()),
  fetchUserWorkouts: userId => dispatch(fetchUserWorkouts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
