import React from 'react'

const About = () => {


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
 // const ImageList = data.map(data => <li>{data}</li>);
 //var ImageList = require('react-image-list');
  return (
    <>
    <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
      <span className='text-danger'>Items</span> List
    </h1>
    <div>
      {imagesList.map((image) => ( 
        <><img key={image.id} src={image.src} alt={image.alt} />
        
        <input className='text-danger' value={"ID: "+ image.id +  " " + "Name: " + image.alt} /></>

      ))}

    </div>

    </>
  );
}

export default About