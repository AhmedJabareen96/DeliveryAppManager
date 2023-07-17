import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/deliveries/');
        setPeople(response.data);
      } catch (error) {
        console.log('Error fetching data from the API:', error);
      }
    };

    fetchData();
  }, []);

  const listItems = people.map(person => <li key={person.id}>{person.name}: {person.profession}</li>);

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
