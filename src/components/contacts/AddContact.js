import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';

                /*
        "address": "123 Main Street",
        "workingHours": "9 AM - 6 PM",
        "openStatus": "Open",
        "items": [],

*/


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          licenseNumber: '',
          dateOfBirth: ''
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
    
        // Reset the form fields
        this.setState({
          name: '',
          licenseNumber: '',
          dateOfBirth: ''
        });
      };
    
      render() {
        const { name, licenseNumber, dateOfBirth } = this.state;
    
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
              <label htmlFor="licenseNumber">License Number:</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                value={licenseNumber}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
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