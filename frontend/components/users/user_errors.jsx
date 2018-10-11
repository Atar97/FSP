import React from 'react';

export default ({errors}) => {
  let classname;
  if (errors.length > 0) {
    classname = 'error-div';
  } else {
    classname = 'none error-div';
  }
  return (
    <div className={classname}>
      <ul>
        {errors.map(error => <li className='error'>{error}</li>)}
      </ul>
    </div>
  );
};
