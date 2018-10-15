import React from 'react';

export default class RouteTools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      undidPoints: []
    };
  }

  undo() {
    const {markers, popMarker} = this.props;
    const marker = markers[markers.length - 1];
    popMarker();
    marker.setMap(null);
    this.state.undidPoints.push(marker);
  }

  render() {
    return (
      <div className='route-tools'>
        <header className='distance-header'>
          <span>distance</span>
          <strong>{this.props.miles} MI</strong>
        </header>
        <div className='buttons'>
          <button  id='undo' className='edit-button'
            onClick={this.undo.bind(this)}>Undo</button>
        </div>
      </div>
    );
  }

}
