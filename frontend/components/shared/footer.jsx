import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className='footer-container'>
      <div className='link-list'>
        <ul>
          <li>Social</li>
          <li><a href='https://github.com/Atar97'>
            Github</a></li>
          <li><a href='https://www.linkedin.com/in/austin-cotant-5946b5164/'>
            LinkedIn</a></li>
          <li><Link to='/'>Website</Link></li>
        </ul>
        <ul>
          <li>Help</li>
          <li><Link to='/'>Dummy Link</Link></li>
          <li><Link to='/'>Dummy Link</Link></li>
          <li><Link to='/'>Dummy Link</Link></li>
        </ul>
        <ul>
          <li>About Us</li>
          <li><Link to='/'>Dummy Link</Link></li>
          <li><Link to='/'>Dummy Link</Link></li>
          <li><Link to='/'>Dummy Link</Link></li>
        </ul>
      </div>
    </div>
  );
};
