import React from 'react';

export default class CreateButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      undidPoint: null
    };
  }

  undo(event) {
    this.state.undidPoint = this.props.markers.pop();
  }

  render() {
    return (
      <div className='buttons'>
        <button id='undo' disabled onClick={this.undo.bind(this)}>Undo</button>
      </div>
    );
  }

}
