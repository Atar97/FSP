import React from 'react';
import {Link} from 'react-router-dom';

export default class RouteIndexItem extends React.Component {
  render () {
    const route = this.props.route;
    return (
      <ul className='route-item'>
        <li className='route'>{route.id}</li>
        <li className='created'>{route.createdDate}</li>
        <li className='distance'>{route.distance}</li>
        <li className='name'>{route.name}</li>
        <li className='city'>{route.city}</li>
        <li className='options'>
          <p>copy</p>
          <p>edit</p>
          <p>delete</p>
        </li>
      </ul>
    );
  };
}
