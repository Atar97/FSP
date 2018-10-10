import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className='splash'>
      <div className='splash-image vertical-box'>
        <div className='vertical-box'>
          <div className='line'></div>
          <h1>own every mile</h1>
          <div className='line'></div>
        </div>
        <div className='vertical box'>
          <p>The best mobile run tracking experience,</p>
          <p>backed by the world's largest digital</p>
          <p>health and fitness community.</p>
        </div>
        <Link to='/signup' className='green-link splash-signup'>
          Sign Up</Link>
        <div className='login-box'>
          <p>Already a member?</p>
          <Link to='/login' className='splash-login'>log in</Link>
        </div>

      </div>
    </div>
  );
};
