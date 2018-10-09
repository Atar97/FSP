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
      Day: '',
      month: '',
      Year: '',
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
    const DOB = `${this.state.Day}/${this.state.month}/${this.state.Year}`;
    const user = {user: Object.assign({}, this.state, {DOB})};
    this.props.sendForm(user);
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div className='userform-container'>
          <Link to='/signup'>sign up</Link>
          <form className='userform login-form'
            onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>{this.createInput('email')}</li>
              <li>{this.createInput('password', 'password')}</li>
              <li><button>log in</button></li>
            </ul>
          </form>
        </div>
      );
    }
    return (
      <div className='userform-container'>
        <Link to='/login'>LOG IN</Link>
          <form className='userform signup-form'
            onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>{this.createInput('fname')}</li>
              <li>{this.createInput('lname')}</li>
              <li>{this.createInput('email')}</li>
              <li>{this.createInput('password', 'password')}</li>
              <li className='holder'>
                  {this.createSelect(1, 31, 'Day')}
                  {this.createMonthSelect()}
                  {this.createSelect(2006, 1900, 'Year')}
              </li>
              <li className='holder'>
                <label className='input'>Male
                  <input type='radio' name='gender' value='M'
                    className='radio'
                    onClick={() => {this.state.gender = 'M';}}></input>
                </label>
                <label className='input'>Female
                  <input type='radio' name='gender' value='F'
                    className='radio'
                    onClick={() => {this.state.gender = 'F';console.log('change')}}></input>
                </label>
              </li>
              <li>{this.createInput('country')}</li>
              <li><button>sign up</button></li>
            </ul>
          </form>
      </div>
    );
  }

}

export default UserForm;
