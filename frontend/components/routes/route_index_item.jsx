import React from 'react';
import {Link} from 'react-router-dom';

export default class RouteIndexItem extends React.Component {
  render () {
    const route = this.props.route;
    let classname = 'route-item';
    if (this.props.idx % 2 == 1) {
      classname += ' gray';
    }
    return (
      <ul className={classname}>
        <li className='route attribute-box'><p>{route.id}</p></li>

        <li className='created attribute-box'>
          <Link to={`/routes/${route.id}`} className='link-style'>{route.createdDate}</Link></li>

        <li className='distance attribute-box'><p>{route.distance}</p></li>

        <li className='name attribute-box'>
          <Link to={`/routes/${route.id}`} className='link-style'>{route.name}</Link></li>
        <li className='city attribute-box'><p>{route.city}</p></li>

        <li className='options attribute-box'>
          <p className='link-style'>copy</p>
          <p className='link-style'>edit</p>
          <p className='link-style'>delete</p>
        </li>
      </ul>
    );
  };
}
