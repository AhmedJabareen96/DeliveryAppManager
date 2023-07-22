import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
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

  const photostyle = {
    border:'1px solid #ddd',
    borderradius: '4px',
    padding: '5px',
    width: '150px',
  };

  const imagesList = [
    {
      id: 1,
      src: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
      alt: "Image 4",
    },
  ];


  const jsonData = [
    { id: 1, name: 'Image 1', imageUrl: 'https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp' },
    { id: 2, name: 'Image 2', imageUrl: 'https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp' },
    // ...other objects
  ];
 // const ImageList = data.map(data => <li>{data}</li>);
 //var ImageList = require('react-image-list');
  return (
    
    <>
    <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
      <span className='text-danger'>Items</span> List
    </h1>
    <div>

      <ul>
        {items.map((item) => (
          <li style={formStyle} key={item.id}>
            <tr style={labelStyle}> <td>Category : {item.category}</td> </tr>
            <tr style={labelStyle}> <td>Created At : {item.createdAt}</td> </tr>
            <tr style={labelStyle}> <td>ID : {item.id}</td> </tr>
            <tr style={labelStyle}> <td>Price :  {item.price}</td></tr>
            <tr style={labelStyle}> <td>Title : {item.title}</td> </tr>

            <img src={item.image} alt={item.name} style = {photostyle}/>
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}

export default About