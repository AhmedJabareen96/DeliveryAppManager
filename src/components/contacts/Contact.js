import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

  state = { 
    showContactInfo : false
  }; 

  onDeleteClick = async (id, dispatch) => {
    console.log("the id is : " + id)
     axios.delete("http://localhost:5000/delivers/delete/" + id)
     .then(res => {

      console.log(res)

     }).catch(error => {

      console.log(error)

     }) 
     
    
    dispatch( {type : 'DELETE_CONTACT', payload : id})
  }

  render() {

    const { id, name, email, phoneNumber,carType,carNumber ,createdAt,drivingLicense,_id    } = this.props.contact;
    const { showContactInfo } = this.state;
    

    return (
    <Consumer>
      { value => {
        const { dispatch } = value;
       // alert(_id)
        return ( 
          <div className='card card-body mb-3'>
            <h2>{name} <i onClick={ () => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{cursor : 'pointer'}}/>
              <i className="fas fa-times" style={{cursor : 'pointer', float : 'right', color : 'red'}} onClick = { this.onDeleteClick.bind(this, _id, dispatch) } />
              
              <Link to={`contact/edit/${_id}`}>
                
                <i className = 'fa fa-edit' style = {{cursor : 'pointer', float : 'right', color : 'blue', marginRight : '1rem'}}></i>
              </Link>
            </h2>

            {showContactInfo ? (
              <ul className='list-group'>
                <li className='list-group-item'>Email : {email}</li>
                <li className='list-group-item'>Phone : {phoneNumber}</li>
                <li className='list-group-item'>Car Type : {carType}</li>
                <li className='list-group-item'>Car Number: {carNumber}</li>
                <li className='list-group-item'>Created At : {createdAt}</li>
                <li className='list-group-item'>Driving License : {drivingLicense}</li>
                <li className='list-group-item'>Id : {_id}</li>

              </ul> ): null }
  
          </div>
        )
      }}
    </Consumer>  
    )
  }
}

Contact.propTypes = {
    contact : PropTypes.object.isRequired,
};

export default Contact;