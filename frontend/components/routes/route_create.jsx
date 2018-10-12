import React from 'react';

import CreateMap from '../maps/create_map';

class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='route-creation-container'>
        <div className='options'></div>
        <div className='big-map'>
          <div className='buttons'></div>
          <CreateMap />
        </div>
      </div>
    );
  }
}


export default RouteCreate;
