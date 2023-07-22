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
      name: '',
      price:'',
      catagory:'',
      stores:'',
      id:'',
      createdAt:'',
      selectedFile: null


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
        const [items, setItems] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:5000/items/');
              setItems(response.data);
              console.log("item looks like this " + items) 
      
            } catch (error) { 
              console.log('Error fetching data from the API:', error);
            }
          };
      
          fetchData();
        }, []);



       
    // Reset the form fields
    this.setState({
      name: '',
      price:'',
      catagory:'',
      stores:'',
      id:'',
      createdAt:'',
      selectedFile: null


    });
  };

  

  render() {




    
    const { name,price ,catagory,stores, id, createdAt , drivingLicense , email , phoneNumber} = this.state;
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
          <label htmlFor="createdAt" style={labelStyle} >Price :</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="car Number" style={labelStyle}> Catagory :</label>
          <input
            type="text"
            id="workingHours"
            name="workingHours"
            value={catagory}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor=" car Type" style={labelStyle}>Stores :</label>
          <input
            type="text"
            id="lat"
            name="lat"
            value={stores}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="driving License" style={labelStyle} >ID :</label>
          <input
            type="text"
            id="lng"
            name="lng"
            value={id}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="items list : (1,5,7...)" style={labelStyle} > Created At :</label>
          <input
            type="text"
            id="lng"
            name="lng"
            value={createdAt}
            onChange={this.handleChange}
            required
            style={inputStyle}
          />
        </div>


      <div style={formGroupStyle}>
        <PhotoUpload>
          


        </PhotoUpload>
      </div>







        <button type="submit" style={submitButtonStyle} >Submit</button>
      </form>
      );
  }
}

export default AddItem