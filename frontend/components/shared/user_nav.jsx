import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import {currentUser} from '../../reducers/selectors';
import {logot} from '../../actions/session_actions';

class UserNav extends React.Component {

  handleLogout(event) {
    if (this.props.currentUser) {
      this.props.logout();
    }
  }

  render() {
    let usernav;
    if (this.props.currentUser) {
      usernav = (
        <div className='usernav'>
          <button className='logout-button green-link'
            onClick={this.handleLogout.bind(this)}>Log Out</button>
        </div>
      );
    } else {
      usernav = (
        <div className='usernav'>
          <Link className='login-link navlink'to='/login'>Log in</Link>
          <Link className='signup-link'to='/signup'>Sign Up</Link>
        </div>
      );
    }
    return usernav;
  }
}

const mapStateToProps = (state) => {
  return {currentUser: currentUser(state)};
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(UserNav));
