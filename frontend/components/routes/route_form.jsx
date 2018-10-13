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
    const {
      markers, address,
      fetchAddress, routeDistance,
      createRoute, createMarkers,
      clearDistance, history
    } = this.props;
    event.preventDefault();
    const data = markers.map((marker, idx) => {
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
    const route = Object.assign({}, this.state);
    route.distance = routeDistance;
    //latlng=40.714224,-73.961452
    const startPosition = markers[0].position;
    const latLngString = `${startPosition.lat()},${startPosition.lng()}`;
    fetchAddress(latLngString).then(mainAddress => {
      route.city = this.createCity(mainAddress.address);
      createRoute({route})
        .then(res => {
          const resRoute = Object.values(res.payload)[0];
          createMarkers(data, resRoute.id);
        }).then(response => {
          clearDistance();
          history.push('/routes/my_routes');
        }
      );
    });
  }

  createCity(addressComponents) {
    const cityArray = [];
    addressComponents.forEach(component => {
      const types = component.types;
      if (types.includes('locality') || types.includes('sublocality') ||
        types.includes('administrative_area_level_1') ||
        types.includes('country')) {
        cityArray.push(component.short_name);
      }
    });
    return cityArray.join(', ');
  }

  handleChange(inputType) {
    return (event) => this.setState({[inputType]: event.target.value});
  }

  moveCenter(event) {
    event.preventDefault();
    this.props.fetchLocation(
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
