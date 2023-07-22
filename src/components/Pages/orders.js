import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [Orders, setOrders] = useState([]);
  const [items,setItems] = useState([]);
  const [hafatsem,setHafatsem] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/deliveries/');
        setOrders(response.data);
        
        
      } catch (error) {
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders/');
        
        
        setItems(response.data)
      } catch (error) {
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items/');
        setHafatsem(response.data);
       // console.log("hafatsem" + hafatsem)  

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

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
};

const thTdStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ccc',
};

const thStyle = {
  backgroundColor: '#f2f2f2',
};

const orderRowStyle = {
  backgroundColor: '#f5f5f5',
};

const hoverStyle = {
  backgroundColor: '#eaf1ff',
};

const itemDivStyle = {
  marginBottom: '5px',
};
const ulStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  justifyContent: 'center',
  background: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
};

const liStyle = {
  width: '200px',
  padding: '20px',
  textAlign: 'center',
  borderRight: '1px solid #ccc',
};
const spanStyle = {
  display: 'inline-block',
  padding: '10px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#3498db',
  borderRadius: '4px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const spliter =  [];
// for (const key in hafatsem) {
//   spliter.push(key);
//   spliter.push(hafatsem[key]); 
// } 

function mapObjectToCategory(hafatsem, spliter) {
for (const key in hafatsem) {
  if (typeof hafatsem[key] === "object" && hafatsem[key] !== null) {
    // If the value is an object (and not null), recursively handle it
    mapObjectToCategory(hafatsem[key], spliter);
  } else {
    // Otherwise, push the property and its value to the array
    spliter.push(key);
    spliter.push(hafatsem[key]);
  }
}
}
mapObjectToCategory(hafatsem, spliter)

//console.log("result array " + spliter); 


     // const result = order.items.split(',')
      //console.log(result) 



    
       





 
  const listItems = items.map(order => 
    
    
    <ul className='list-group' key={order.clientId} style={ulStyle}>

        <li className='list-group-item'>order ID : {order._id}
        </li>
        <li className='list-group-item'>client ID : {order.clientId}
        </li>
        <li className='list-group-item'>Items :

          <ul className='list-group' style={ulStyle}>
            <li className='list-group-item'>List : {
            
            
            order.items


        
      
       
            }
            </li>
            <li className='list-group-item'>Price : $$$$$$$$$$ </li>


          </ul>
        </li> {<div></div>}
      </ul>)
  ;
  //console.log(items)
  return (

    <>
      <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
        <span className='text-danger'>Orders</span> List
      </h1>
       <ul className='list-group' >{listItems}</ul>
    </>
  );
} 

export default About; 