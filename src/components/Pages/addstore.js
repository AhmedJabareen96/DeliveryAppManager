import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';
/*name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  workingHours: {
    type: String,
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  }*/
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address:'',
      workingHours:'',
      lat:'',
      lng:''


    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation and submission logic here
    // For simplicity, we're just logging the form data
    console.log(this.state);
    axios.post("http://localhost:5000/stores/add", this.state)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });

    // Reset the form fields
    this.setState({
      name: '',
      address:'',
      workingHours:'',
      lat:'',
      lng:''

    });
  };

  render() {
    const { name,address ,lat,lng, workingHours, carType , drivingLicense , email , phoneNumber} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>



        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="car Number">working Hours :</label>
          <input
            type="text"
            id="workingHours"
            name="workingHours"
            value={workingHours}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor=" car Type">lat :</label>
          <input
            type="text"
            id="lat"
            name="lat"
            value={lat}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="driving License">lng :</label>
          <input
            type="text"
            id="lng"
            name="lng"
            value={lng}
            onChange={this.handleChange}
            required
          />
        </div>







        <button type="submit">Submit</button>
      </form>
      );
  }
}

export default AddContact