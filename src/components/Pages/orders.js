import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [Orders, setOrders] = useState([]);
  const [items,setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/deliveries/');
        setOrders(response.data);
        
        
        setItems(response.data.itemIds)
      } catch (error) {
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);



/*<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Hobbies</th>
    </tr>
  </thead>
  <tbody>
    {Orders.map((item) => (
      <tr key={item._id}>
        <td>{item.createdAt}</td>
        <td>{item._id}</td>
        <td>
    
         
        </td>
      </tr>
    ))}
  </tbody>
</table>*/

  const listItems = Orders.map(order => 
   <tr key={order.clientId}> 
     <td>created At :</td>{order.createdAt}:
     <td>order ID : </td> {order._id}:
     <td>client ID :</td> {order.clientId}:
     <td>Items :</td> { 
      

  
  
  };





  
  </tr>)

  


  
  
  
  ;



  console.log(Orders)



  return (

    <>
      <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
        <span className='text-danger'>Orders</span> List
      </h1>
       <ul className='list-group-item'>{listItems}</ul>


      
       <ul className='list-group'>
        <li></li>
      </ul>
    </>
  );
} 

export default About;