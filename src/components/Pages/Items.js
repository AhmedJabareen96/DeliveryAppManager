import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items/');
        setItems(response.data);
        console.log(items) 

      } catch (error) { 
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);



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
          <li key={item.id}>
            <tr> <p>category :</p> {item.category}</tr>
            <tr> <p>created At :</p> {item.createdAt}</tr>
            <tr> <p>id :</p> {item.id}</tr>
            <tr> <p>price :</p> {item.price}</tr>
            <tr> <p>title :</p> {item.title}</tr>

            <img src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}

export default About