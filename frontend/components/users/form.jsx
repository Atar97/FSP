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
    this.createSelect = this.createSelect.bind(this);
    this.createMonthSelect = this.createMonthSelect.bind(this);
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

  createSelect(min, max, name) {
    const mappableArray = [];
    for (let i = min; i <= max; i++) {
      mappableArray.push(i);
    }
    return (
      <select onChange={this.handleChange(name)}>
        <option>{name}</option>
        {mappableArray.map(el => {
          return <option key={el} value={el}>{el}</option>;
        })}
      </select>
    );
  }

  createMonthSelect() {
    const mappableArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    const months = [null,
          'January', 'February', 'March',
          'April', 'May', 'June',
          'July', 'August', 'September',
          'October', 'November', 'December'];
    return (
      <select onChange={this.handleChange('month')}>
        <option>Month</option>
        {mappableArray.map(el => {
          return <option key={el} value={el}>{months[el]}</option>;
        })}
      </select>
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
            <input onChange={this.handleChange('fname')}></input>
            <input onChange={this.handleChange('lname')}></input>
            <input onChange={this.handleChange('email')}></input>
            <input type='password'
              onChange={this.handleChange('password')}></input>
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
