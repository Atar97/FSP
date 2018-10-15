import React from 'react';
import {Link} from 'react-router-dom';

import UserNav from './user_nav';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navlinks'>
          <Link className='homelink' to='/'>
          <i className="fas fa-route"></i>
          plot my plod
        </Link>
        <Link className='navlink' to='/workouts/create'>training</Link>
        <Link className='navlink' to='/routes/my_routes'>routes</Link>
        <Link className='navlink' to='/challenges'>challenges</Link>
      </div>
      <UserNav />
    </div>
  );
};

export default NavBar;
