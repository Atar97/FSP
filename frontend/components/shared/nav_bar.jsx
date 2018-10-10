import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {Link} from 'react-router-dom';

const NavBar = ({session}) => {
  // <Link to={`${session.id}`}>User</Link>
  return (
    <div className='navbar'>
      <div className='navlinks'>
          <Link className='homelink' to='/'>
          <i className="fas fa-route"></i>
          plot my plod
        </Link>
        <Link className='navlink' to='/training'>training</Link>
        <Link className='navlink' to='/routes'>routes</Link>
        <Link className='navlink' to='/challenges'>challenges</Link>
      </div>
      <div className='usernav'>
          <Link className='login-link navlink'to='/login'>Log in</Link>
          <Link className='signup-button'to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {session: state.session};
}
export default connect(mapStateToProps)(NavBar);
