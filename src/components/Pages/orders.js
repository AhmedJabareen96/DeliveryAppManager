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


  const listItems = Orders.map(order => 


    
   <tr key={order.clientId} style={{ ...thTdStyle, ...orderRowStyle }} onMouseOver={() => this.style = {...thTdStyle, ...hoverStyle }} onMouseOut={() => this.style = {...thTdStyle, ...orderRowStyle }}> 
     <td style={thTdStyle}>created At : <br></br>
     </td><div>{order.createdAt}</div>
     <td style={thTdStyle}>order ID : 
     </td> <div>{order._id}</div>
     <td style={thTdStyle}>client ID :
     </td> <div>{order.clientId}</div>
     <td style={thTdStyle}>Items :
     </td> {
     
     <div></div>
      

  
  
  }
  

  





  
  </tr>)

  


  
  
  
  ;



  console.log(Orders)



  return (

    <>
      <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
        <span className='text-danger'>Orders</span> List
      </h1>
       <ul >{listItems}</ul>
    </>
  );
} 

export default About;