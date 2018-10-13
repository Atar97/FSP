import React from 'react';

export default class RouteTools extends React.Component {
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
      <div className='route-tools'>
        <header className='distance-header'>
          <span>distance</span>
          <strong>{this.props.miles} MI</strong>
        </header>
        <div className='buttons'>
          <button  id='undo' disabled className='edit-button'
            onClick={this.undo.bind(this)}>Undo</button>
        </div>
      </div>
    );
  }

}
