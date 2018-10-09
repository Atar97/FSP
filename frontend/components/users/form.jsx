import React from 'react';
import {Link} from 'react-router-dom';

import {
  createSelect,
  createMonthSelect,
  createInput
  } from './user_form_util';

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
    this.createInput = createInput.bind(this);
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

  render() {
    if (this.props.formType === 'login') {
      return (
        <div className='userform login-form'>
          <Link to='/signup'>sign up</Link>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>{this.createInput('email')}</li>
              <li>{this.createInput('password', 'password')}</li>
              <li><button>Log In</button></li>
            </ul>
          </form>
        </div>
      );
    }
    return (
      <div className='userform signup-form'>
        <Link to='/login'>log in</Link>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>{this.createInput('fname')}</li>
              <li>{this.createInput('lname')}</li>
              <li>{this.createInput('email')}</li>
              <li>{this.createInput('password', 'password')}</li>
              <li>
                {this.createSelect(1, 31, 'day')}
                {this.createMonthSelect()}
                {this.createSelect(2006, 1900, 'year')}
              </li>
              <li>
                <input type='radio' name='gender' value='M'
                  onClick={() => {this.state.gender = 'M';}}></input>
                <input type='radio' name='gender' value='F'
                  onClick={() => {this.state.gender = 'F';}}></input>
              </li>
              <li>{this.createInput('country')}</li>
              <li><button>Sign Up</button></li>
            </ul>
          </form>
      </div>
    );
  }

}

export default UserForm;
