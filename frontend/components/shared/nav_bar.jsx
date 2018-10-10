import React from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

import UserNav from './user_nav';

const NavBar = () => {
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
      <UserNav />
    </div>
  );
};

export default NavBar;
// function mapStateToProps(state) {
//   return {session: state.session};
// }
// export default connect(mapStateToProps)(NavBar);
