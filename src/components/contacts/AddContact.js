import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
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
    
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="car Number">car Number :</label>
              <input
                type="text"
                id="carNumber"
                name="carNumber"
                value={carNumber}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor=" car Type">car Type :</label>
              <input
                type="text"
                id="carType"
                name="carType"
                value={carType}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="driving License">driving License :</label>
              <input
                type="text"
                id="drivingLicense"
                name="drivingLicense"
                value={drivingLicense}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth">email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth">phone Number :</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
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