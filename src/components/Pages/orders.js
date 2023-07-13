import React from 'react'

const About = () => {


  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  const listItems = people.map(person => <li>{person}</li>);

  return (
    <>
    <h1 className="display-4 mb-2" style={{ textAlign: 'center' }}>
      <span className='text-danger'>Orders</span> List
    </h1>
    <ul className='list-group-item'>{listItems}</ul>

    </>
  );
}

export default About