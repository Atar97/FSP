import React from 'react';

export function createSelect(min, max, name) {
  const mappableArray = [];
  if (min < max) {
    for (let i = min; i <= max; i++) {
      mappableArray.push(i);
    }
  } else {
    for (let i = min; i > max; i--) {
      mappableArray.push(i);
    }
  }
  return (
    <select className='input placeholder'
      onChange={this.handleChange(name)}>
        <option>{name}</option>
      {mappableArray.map(el => {
        return <option key={el} value={el}>{el}</option>;
      })}
    </select>
  );
};

export function createMonthSelect() {
  const mappableArray = [1,2,3,4,5,6,7,8,9,10,11,12];
  const months = [null,
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'];
  return (
    <select className='input placeholder'
      onChange={this.handleChange('month')}>
      <option >Month</option>
      {mappableArray.map(el => {
        return <option key={el} value={el}>{months[el]}</option>;
      })}
    </select>
  );
}

export function createInput(fieldName, placeholder,
  type = 'text', className = 'input') {
  if (!placeholder) {
    placeholder = fieldName;
  }
  return (
    <input placeholder={placeholder}
      type={type} className={className}
      onChange={this.handleChange(fieldName)}
      value={this.state[fieldName]}>
    </input>
  );
}
