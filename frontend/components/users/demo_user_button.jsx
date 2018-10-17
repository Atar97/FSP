import React from 'react';

class DemoLogin extends React.Component {
  demoUser(e) {
    e.preventDefault()
    this.props.demoUser()
    .then(() => this.props.history.push('/activity_log'));
  }

  render() {
    return <button id='demo' onClick={this.demoUser.bind(this)}>Demo User</button>
  };
}

export default DemoLogin;
