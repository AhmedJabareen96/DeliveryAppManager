import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {

    
    
    render() {
        //console.log( "here is the user: " +localStorage.getItem("isLoggedIn"))  
        //console.log()

        if (!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {
            const messageStyle = {
                textAlign: 'center',
                color: 'red',
                fontSize: '24px',
                marginTop: '50px',
              };
            
            return <h1 style={messageStyle}>  You are not authrised, Login first !</h1>;  }
       
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <>  
                            <h1 className="display-4 mb-2" style={{textAlign : 'center'}}>
                                <span className='text-danger'>Drivers</span> List
                            </h1>
                            {contacts.map(contact =>
                                <Contact 
                                    key = {contact.id}
                                    contact = {contact}  
                                /> 
                            )}
                        </>     
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts