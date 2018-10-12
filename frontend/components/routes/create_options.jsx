import React from 'react';

export default class CreateOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      name: '',
      distance: '',
    };
  }

  updateMarkers(event) {
    event.preventDefault();
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
    this.props.createRoute({route: Object.assign({}, this.state)})
    .then(res => {
      const resRoute = Object.values(res.payload)[0];
      this.props.createMarkers(data, resRoute.id);
    });
  }

  handleChange(inputType) {
    return (event) => this.setState({[inputType]: event.target.value});
  }

  render() {
    return (
      <div className='options'>
        <form>
          <input onChange={this.handleChange('name').bind(this)}
            value={this.state.name} placeholder='Name this route'
            ></input>
          <input onChange={this.handleChange('distance').bind(this)}
            value={this.state.distance} placeholder='distance'
            ></input>
          <input onChange={this.handleChange('city').bind(this)}
            value={this.state.city} placeholder='city'
            ></input>

          <button onClick={this.updateMarkers.bind(this)}>Save Route</button>
        </form>
      </div>
    );
  }
}
