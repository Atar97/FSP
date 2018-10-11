import React from 'react';

export default ({errors}) => (
  <div className='error-div'>
    <ul>
      {errors.map(error => <li>{error}</li>)}
    </ul>
  </div>
);
