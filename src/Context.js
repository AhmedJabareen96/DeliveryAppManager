import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact.id !== action.payload )
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [ action.payload, ...state.contacts]
            };   
        default:
            return state;
    }
};

export class Provider extends Component{
    state = {
        contacts : [ ],
        dispatch : action => this.setState( state => reducer(state, action))
    };
      
    // componentDidUpdate(){
    //     alert("You are going to delete a contact")
    // }

    async componentDidMount() {
        // get the contacts data from here
    const res = await axios.get('http://localhost:5000/delivers/')
            // .then(response => response.json())
            console.log(res.data);
            this.setState({ contacts : res.data })

    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
} 

export const Consumer = Context.Consumer;