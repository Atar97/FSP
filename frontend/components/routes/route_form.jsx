import React from 'react';
import {withRouter} from 'react-router-dom';
import {addClass, removeClass} from '../../util/html_util';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snapAddress: '',
      name: '',
      errors: [],
    };
  }

  makeMarkerData() {
    const {markers} = this.props;
    return markers.map((marker, idx) => {
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
  }
  saveRoute(event) {
    const {
      markers, address,
      fetchAddress, routeDistance,
      createRoute, createMarkers,
      clearDistance, history
    } = this.props;
    event.preventDefault();
    if (markers.length < 2 || !this.state.name) {

      // this.setState({errors: this.state.errors.push(
      //   'You must have at least 2 points to make a route')});
      if (!this.state.name) {
        this.setState({errors: this.state.errors.concat(
          ['Each route needs a name'])});
      }
      return;
    }
    const data = this.makeMarkerData();
    const route = Object.assign({}, this.state);
    route.distance = routeDistance;
    //latlng=40.714224,-73.961452
    const startPosition = markers[0].position;
    const latLngString = `${startPosition.lat()},${startPosition.lng()}`;
    let newRouteId;
    fetchAddress(latLngString).then(mainAddress => {
      route.city = this.createCity(mainAddress.address);
      createRoute({route})
      .then(res => {
        const resRoute = Object.values(res.payload)[0];
        createMarkers(data, resRoute.id);
        newRouteId = resRoute.id;
      }).then(response => {
          clearDistance();
          history.push(`/routes/${newRouteId}`);
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
    return (event) => this.setState({
      [inputType]: event.target.value,
      errors: []
    });
  }

  moveCenter(event) {
    event.preventDefault();
    if (this.state.snapAddress) {
      this.props.fetchLocation(
        this.createAddressString()
      ).then(this.setState({snapAddress: ''}));
    }
  }

  createAddressString() {
    // 1600+Amphitheatre+Parkway,+Mountain+View,+CA address style
    return this.state.snapAddress.split(' ').join('+');
  }

  render() {
    let errors;
    debugger;
    if (this.state.errors) {
      errors = (
        <div className='error-box'>
          {this.state.errors.map((error, i) =>
            <p key={i}>{error}</p>)}
        </div>
      );
    }
    return (
      <div className='options' id='options-container'>
        <form>
          <h2 className='h2'>Choose map location:</h2>
          <input onChange={this.handleChange('snapAddress').bind(this)}
            value={this.state.snapAddress} placeholder='Address Or Zip'
            className='address' id='address'
            ></input>
          <button className='search' onClick={this.moveCenter.bind(this)}>
            Search</button>
        </form>
        <form>
          <h2>Route Details</h2>
          <input onChange={this.handleChange('name').bind(this)}
            value={this.state.name} placeholder='Name this route'
            id='name'
            ></input>

          <button className='submit'
            onClick={this.saveRoute.bind(this)}>Save Route</button>
        </form>
        {errors}
      </div>
    );
  }
}

export default withRouter(RouteForm);
