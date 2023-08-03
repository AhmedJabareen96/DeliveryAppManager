import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';
import React, {Component, useEffect, useState } from 'react';
import PhotoUpload from './uploadPhoto';

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
class AddItem extends Component {



  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price:0,
      category:'',
      id:0,
      image: ''


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
    axios.post("http://localhost:5000/items/add", this.state)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
 



       
    // Reset the form fields
    this.setState({
      title: '',
      price:0,
      category:'',
      id:0,
      image: ''
    });
  };

  

  render() {




    
    const { title,price ,catagory,stores, id,image, createdAt , drivingLicense , email , phoneNumber} = this.state;
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
          <label htmlFor="title" style={labelStyle} > Name :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="price" style={labelStyle} >Price :</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="category" style={labelStyle}> category :</label>
          <input
            type="text"
            id="category"
            name="category"
            value={catagory}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="id" style={labelStyle} >ID :</label>
          <input
            type="number"
            id="id"
            name="id"
            value={id}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="image" style={labelStyle} >URL :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>



      {/* <div style={formGroupStyle}>
        <PhotoUpload >
          


        </PhotoUpload>
      </div> */}







        <button type="submit" style={submitButtonStyle} >Submit</button>
      </form>
      );
  }
}

export default AddItem