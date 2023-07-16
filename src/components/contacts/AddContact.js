import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';

                /*
        "address": "123 Main Street",
        "workingHours": "9 AM - 6 PM",
        "openStatus": "Open",
        "items": [],

*/


class AddContact extends Component {
  state = {
     name : '',
     email : '',
     phone : '',
     drivingLicense :'',
     carType : '',
     carNumber :'',
     deliveriesLog :'',
     subscriptionDate:'',
     address : '',
     workiinghours : '',
     openstatus:'',
     items:'',



     showContactInfo : false,
     errors : {}
   };

    onSubmit = async (dispatch, e) => {

        e.preventDefault();

        const { name, email, phone } = this.state;


        //Check for field errors
        if (name === ''){
            this.setState({ errors : { name : 'Name is required '}});
            return;
        }
        if (email === '') {
            this.setState({ errors : { email : ' Email is required'}});
            return;
        }
        if (phone === '') {
            this.setState({ errors : { phone : 'Phone number is required'}});
            return;
        }

        const newContact = {
            id : v4(),
            name,
            email,
            phone
        };

        const res = await axios.post('http://localhost:5000/delivers/add', newContact);

        dispatch({type : 'ADD_CONTACT', payload : res.data })    

        //To clear the state
        this.setState({
            name: '',
            email : '',
            phone : '',
            errors : {}
        });

        this.props.history.push('/')
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value 
    });

  render() {

    const { name, email, phone,drivingLicense, carType,subscriptionDate,address,workinghours,openstatus,items,errors} = this.state;
    const { showContactInfo } = this.state;
/*   {
        "address": "321 Cedar Street",
        "phoneNumber": "555-7890",
        "email": "emily@example.com",
        "drivingLicense": "ABC345",
        "carType": "Hatchback",
        "carNumber": "ABC3456",
        "deliveriesLog": [],
        "subscriptionDate": "2022-10-01",
        "deliveries": []*/
    return (
        <Consumer>
            {value => { const { dispatch } = value;
                return (
                    <><div className='card mb-4'>
                        <div className="card-header">
                            <h3>Add Driver <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" /></h3>
                        </div>

                        {showContactInfo ? (
                            <div className="card-body">
                                <form >
                                    <TextInputGroup
                                        label='Name' name='name' placeholder='Enter Driver name' value={name} onChange={this.onChange} type='name' error={errors.name} />
                                    <TextInputGroup
                                        label='Email' name='email' placeholder='Enter Driver email' value={email} onChange={this.onChange} type='email' error={errors.email} />
                                    <TextInputGroup
                                        label='Phone' name='phone' placeholder='Enter Driver number' value={phone} onChange={this.onChange} type='phone' error={errors.phone} />
                                    <TextInputGroup
                                        label='drivingLicense' name='drivingLicense' placeholder='Enter Driving licence' value={drivingLicense} onChange={this.onChange} type='name' error={errors.name} />
                                    <TextInputGroup
                                        label='carType' name='carType' placeholder='Enter car type' value={carType} onChange={this.onChange} type='name' error={errors.name} />
                                    <TextInputGroup
                                        label='subscriptionDate' name='subscriptionDate' placeholder='Enter Driver subscrcription date' value={subscriptionDate} onChange={this.onChange} type='phone' error={errors.name} />
                                    
                                
                                    
                                    <div class="d-grid col-6 mx-auto">
                                        <button  class="btn btn-danger mt-2" value="Add Driver" onClick={() => {
                                                                                                                const name = 'James';
                                                                                                                 alert('Hello, ', name);
                                                                                                                }} />
                                    </div>
                                </form>
                            </div>
                        ) : null}



                    </div><div className='card mb-4'>
                            <div className="card-header">
                                <h3>Add Store <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" /></h3>
                            </div>

                            {showContactInfo ? (
                                <div className="card-body">
                                    <form >
                                        <TextInputGroup
                                            label='Name' name='name' placeholder='Enter Store name' value={name} onChange={this.onChange} type='name' error={errors.name} />
                                        <TextInputGroup
                                            label='Email' name='email' placeholder='Enter Store email' value={email} onChange={this.onChange} type='email' error={errors.email} />
                                        <TextInputGroup
                                            label='Phone' name='phone' placeholder='Enter Store number' value={phone} onChange={this.onChange} type='phone' error={errors.phone} />
                                         <TextInputGroup
                                            label='Working hours' name='phone' placeholder='Enter Working hours' value={workinghours} onChange={this.onChange} type='phone' error={errors.name} />
                                               <TextInputGroup
                                            label='openstatus' name='phone' placeholder='Enter open status' value={openstatus} onChange={this.onChange} type='phone' error={errors.name} />
                                               <TextInputGroup
                                            label='items' name='phone' placeholder='Enter Store items' value={items} onChange={this.onChange} type='phone' error={errors.name} />
                                               <TextInputGroup
                                            label='Working hours' name='phone' placeholder='Enter Store number' value={phone} onChange={this.onChange} type='phone' error={errors.name} />
                                        <input type="date" id="joined" name="joined"></input>
                                        
                                        
                                        <div class="d-grid col-6 mx-auto">
                                            <button class="btn btn-danger mt-2" value="Add Store" onClick={() => {
                                                                                                                const name = 'James';
                                                                                                                 alert('Hello, ', name);
                                                                                                                }}/>
                                        </div>
                                    </form>
                                </div>
                            ) : null}
                        </div></>
                )



            }}
        </Consumer>
    )
  }
}

export default AddContact