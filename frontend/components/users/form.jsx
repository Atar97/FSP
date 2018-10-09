import React from 'react';
import {Link} from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
      gender: '',
      country: ''
    };

    // this.defaultFills = {
    //   fname: 'First name',
    //   lname: 'Last name'
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(fieldName) {
    return (event) => this.setState({[fieldName]: event.target.value});
  }

  handleSubmit(event) {
    // debugger;
    event.preventDefault();
    const DOB = `${this.state.day}/${this.state.month}/${this.state.year}`;
    const user = {user: Object.assign({}, this.state, {DOB})};
    this.props.sendForm(user);
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <Link to='/signup'>sign up</Link>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange('email')}></input>
            <input onChange={this.handleChange('password')}></input>
            <button>Log In</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <Link to='/login'>log in</Link>
      </div>
    );
  }


}

export default UserForm;
