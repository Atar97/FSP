import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentUser} from '../../reducers/selectors';

import UserNav from './user_nav';

class NavBar extends React.Component {

  render() {
    const {currentUser} = this.props;
    let homelink = '/'
    if (currentUser) {
      homelink = '/activity_log'
    }
    return (
      <div className='navbar'>
        <div className='navlinks'>
          <Link className='homelink' to={homelink}>
            <i className="fas fa-route"></i>
            plot my plod
          </Link>
          <Link className='navlink' to='/workouts/index'>training</Link>
          <Link className='navlink' to='/routes/my_routes'>routes</Link>
          <Link className='navlink' to='/challenges'>challenges</Link>
        </div>
        <UserNav />
      </div>
    );
  };

}

const mapStateToProps = state => ({
  currentUser: currentUser(state)
})

export default connect(mapStateToProps)(NavBar);
