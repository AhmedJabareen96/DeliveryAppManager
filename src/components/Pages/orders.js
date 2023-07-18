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
        const allItemIds =Orders.storesAndItems.flatMap(item => 
         item.itemIds);
        
        setItems(allItemIds)
      } catch (error) {
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);

  const listItems = Orders.map(order => <li key={order.clientId}> <p>created At :</p>{order.createdAt}:
  <p>order ID : </p> {order._id}:
  <p>client ID :</p> {order.clientId}:
  <p>Items :</p> {
  
  
  console.log(items)
  
  
  };
  
  </li>)


  
  
  
  ;

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