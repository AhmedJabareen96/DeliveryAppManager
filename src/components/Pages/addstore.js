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
      lng:'',
      items : ''


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
      lng:'',
      items : ''


    });
  };

  render() {
    const { name,address ,lat,lng, workingHours,items, carType , drivingLicense , email , phoneNumber} = this.state;
    const formStyle = {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const formGroupStyle = {
      marginBottom: '20px',
    };

    const labelStyle = {
      display: 'block',
      marginBottom: '5px',
      color: '#333',
      fontWeight: 'bold',
    };

    const inputStyle = {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    };

    const submitButtonStyle = {
      display: 'block',
      width: '100%',
      padding: '12px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    };

    const errorMessageStyle = {
      color: '#f44336',
      marginTop: '5px',
    };

    return (
      <form onSubmit={this.handleSubmit} style={formStyle} >



        <div style={formGroupStyle} >
          <label htmlFor="name" style={labelStyle} > Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="address" style={labelStyle} >Address :</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="car Number" style={labelStyle}> Working Hours :</label>
          <input
            type="text"
            id="workingHours"
            name="workingHours"
            value={workingHours}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor=" car Type" style={labelStyle}>Lat :</label>
          <input
            type="text"
            id="lat"
            name="lat"
            value={lat}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="driving License" style={labelStyle} >Lng :</label>
          <input
            type="text"
            id="lng"
            name="lng"
            value={lng}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="items list : (1,5,7...)" style={labelStyle} > items list : (1,5,7...) :</label>
          <input
            type="text"
            id="items"
            name="items"
            value={items}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>







        <button type="submit" style={submitButtonStyle} >Submit</button>
      </form>
      );
  }
}

export default AddContact