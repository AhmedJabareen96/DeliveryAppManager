import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import { UserContext } from '../../UserContext';
import axios from 'axios';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          address:'',
          carNumber:'',
          carType:'',
          drivingLicense:'',
          email:'',
          phoneNumber:'',

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
        axios.post("http://localhost:5000/delivers/add", this.state)
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
          carNumber:'',
          carType:'',
          drivingLicense:'',
          email:'',
          phoneNumber:'',
        });


    


      };
    
      render() {
        const { name,address , carNumber, carType , drivingLicense , email , phoneNumber} = this.state;
        const { username, isLoggedIn, setIsLoggedIn } = this.context;
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
            <div style={formGroupStyle}  >
              <label htmlFor="name" style={labelStyle} >Name :</label>
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

            <div style={formGroupStyle} >
              <label htmlFor="address" style={labelStyle} >Address:</label>
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
            <div style={formGroupStyle} >
              <label htmlFor="car Number" style={labelStyle} >Car Number :</label>
              <input
                type="text"
                id="carNumber"
                name="carNumber"
                value={carNumber}
                onChange={this.handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle} >
              <label htmlFor=" car Type" style={labelStyle} >Car Type :</label>
              <input
                type="text"
                id="carType"
                name="carType"
                value={carType}
                onChange={this.handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle} >
              <label htmlFor="driving License" style={labelStyle} >Driving License :</label>
              <input
                type="text"
                id="drivingLicense"
                name="drivingLicense"
                value={drivingLicense}
                onChange={this.handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="dateOfBirth" style={labelStyle} >Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="dateOfBirth" style={labelStyle} >Phone Number :</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
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