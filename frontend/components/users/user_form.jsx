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

  handleClick(event) {
    console.log(event.target.value);
    this.setState({gender: event.target.value});
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
              <li>{this.createInput('fname', 'First name')}</li>
              <li>{this.createInput('lname', 'Last name')}</li>
              <li>{this.createInput('email', 'Email')}</li>
              <li>
                {this.createInput('password', 'Password', 'password')}
              </li>
              <li className='holder'>
                  {this.createSelect(1, 31, 'Day')}
                  {this.createMonthSelect()}
                  {this.createSelect(2006, 1900, 'Year')}
              </li>
              <li className='holder'>

                <input type='radio' defaultValue='Female' id='female'
                  name='gender' onClick={this.handleClick.bind(this)}>
                </input>
                <label htmlFor='female' className='input placeholder no-margin'
                  >Female</label>

                <input type='radio' defaultValue='Male' id='male'
                  name='gender' onClick={this.handleClick.bind(this)}>
                </input>
                <label htmlFor='male' className='input placeholder'
                  >Male</label>

              </li>
              <li>{this.createInput('country', 'Country')}</li>
              <li><button>sign up</button></li>
            </ul>
          </form>
      </div>
    );
  }

}

export default UserForm;