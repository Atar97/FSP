import React from 'react';
import {Link} from 'react-router-dom';

import {createSelect,
  createMonthSelect} from './user_form_util';

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

    this.handleChange = this.handleChange.bind(this);
    this.createSelect = createSelect.bind(this);
    this.createMonthSelect = createMonthSelect.bind(this);
    this.valueSetter = this.valueSetter.bind(this);
  }

  handleChange(fieldName) {
    return (event) => this.setState({[fieldName]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const DOB = `${this.state.day}/${this.state.month}/${this.state.year}`;
    const user = {user: Object.assign({}, this.state, {DOB})};
    this.props.sendForm(user);
  }

  valueSetter(fieldName) {
    if (this.state[fieldName]) {
      return this.state[fieldName];
    }
    return this.defaultFills[fieldName];
  }

  createInput(fieldName, type = 'text') {
    return (
      <input
        type={type}
        onChange={this.handleChange(fieldName)}
        value={this.state[fieldName]}>
      </input>
    );
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div className='userform login-form'>
          <Link to='/signup'>sign up</Link>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange('email')}></input>
            <input type='password'
              onChange={this.handleChange('password')}></input>
            <button>Log In</button>
          </form>
        </div>
      );
    }
    return (
      <div className='userform signup-form'>
        <Link to='/login'>log in</Link>
          <form onSubmit={this.handleSubmit.bind(this)}>
            {this.createInput('fname')}
            {this.createInput('lname')}
            {this.createInput('email')}
            {this.createInput('password', 'password')}
            {this.createSelect(1, 31, 'day')}
            {this.createMonthSelect()}
            {this.createSelect(1900, 2006, 'year')}
            <button>Sign Up</button>
          </form>
      </div>
    );
  }

}

export default UserForm;
