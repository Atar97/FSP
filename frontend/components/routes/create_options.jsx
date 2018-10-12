import React from 'react';

export default class CreateOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  sendData() {
    const data = this.props.markers.map((marker, idx) => {
      let last = false;
      if (idx === this.props.markers.length - 1) {
        last = true;
      }
      return {
        lat: marker.position.lat(),
        lng: marker.position.lng(),
        sequence: idx,
        last
      };
    });
    window.data = data;
  }

  render() {
    return (
      <div className='options'>
        <button onClick={this.sendData.bind(this)}>Create Route</button>
      </div>
    );
  }
}
