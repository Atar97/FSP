import React from 'react';
import {withRouter} from 'react-router-dom';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <div className='options'>
        <form>
          <input onChange={this.handleChange('name').bind(this)}
            value={this.state.name} placeholder='Name this route'
            ></input>
          <input onChange={this.handleChange('city').bind(this)}
            value={this.state.city} placeholder='city'
            ></input>

          <button onClick={this.saveRoute.bind(this)}>Save Route</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RouteForm);
