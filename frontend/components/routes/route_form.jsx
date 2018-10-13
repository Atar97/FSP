import React from 'react';
import {withRouter} from 'react-router-dom';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snapAddress: '',
      city: '',
      name: '',
      distance: 0,
    };
  }

  saveRoute(event) {
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
    this.state.distance = this.props.routeDistance;
    this.props.createRoute({route: Object.assign({}, this.state)})
    .then(res => {
      const resRoute = Object.values(res.payload)[0];
      this.props.createMarkers(data, resRoute.id);
    }).then(response => {
      debugger;
      this.props.clearDistance();
      this.props.history.push('/routes/my_routes');
    }
    );
  }

  handleChange(inputType) {
    return (event) => this.setState({[inputType]: event.target.value});
  }

  moveCenter(event) {
    event.preventDefault();
    this.props.fetchAddress(
      this.createAddressString()
    ).then(this.setState({snapAddress: ''}));
  }

  createAddressString() {
    // 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
    return this.state.snapAddress.split(' ').join('+');
  }

  render() {
    return (
      <div className='options'>
        <form>
          <h2>Choose map location:</h2>
          <label>
            <input onChange={this.handleChange('snapAddress').bind(this)}
              value={this.state.snapAddress} placeholder='Address Or Zip'
              className='address'
              ></input>
            <button className='search' onClick={this.moveCenter.bind(this)}>
              Search</button>
          </label>
        </form>
        <form>
          <h2>Route Details</h2>
            <input onChange={this.handleChange('name').bind(this)}
              value={this.state.name} placeholder='Name this route'
              ></input>
          <input onChange={this.handleChange('city').bind(this)}
            value={this.state.city} placeholder='city'
            ></input>

          <button className='submit'
            onClick={this.saveRoute.bind(this)}>Save Route</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RouteForm);
