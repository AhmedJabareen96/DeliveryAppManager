import React, { Component } from 'react'
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';

class EditContact extends Component {
  state = {
     name : '',
     email : '',
     phone : '',
     showContactInfo : false,
     errors : {}
   };

   async componentDidMount(){
    // get the contacts data from here
const res = await axios.get('http://localhost:5000/delivers/')
        // .then(response => response.json())
        console.log(res.data);
        this.setState({ contacts : res.data })

}

    onSubmit = async (dispatch, e) => {

        const ID = window.location.href.split("/")
        alert(ID[ID.length-1])

        axios.put("http//localhost:5000/delivers/update/"+ID[ID.length-1,this.state]);
        alert("done update!")




        

        this.props.history.push('/')
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value 
    });

  render() {
    const { name, email, phoneNumber,carType,carNumber ,createdAt,drivingLicense,_id} = this.state;
   // alert(this.state._id)
   // const { id, name, email, phoneNumber    } = this.props.contact;

   //const ID = window.location.href.split("/")
   //alert(ID[ID.length-1])

    const { showContactInfo } = this.state;

    return (
        <Consumer>
            {value => { const { dispatch } = value;
                return (
                    <div className='card mb-4'>
                        <div className="card-header">
                            <h3>Edit Driver <i onClick={ () => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down"/></h3>
                        </div>

                        {showContactInfo ? (
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind (this, dispatch)}>
                                    <TextInputGroup 
                                        label= 'Name' name = 'name' placeholder= 'Enter name' value= {name} onChange = {this.onChange} type= 'name' 
                                    />
                                    <TextInputGroup 
                                        label= 'Email' name = 'email' placeholder= 'Enter email' value= {email} onChange = {this.onChange} type = 'email' 
                                    />
                                    <TextInputGroup 
                                        label= 'Phone' name = 'phone' placeholder= 'Enter number' value= {phoneNumber} onChange = {this.onChange} type = 'phone' 
                                    />
                                      <TextInputGroup 
                                        label= 'Car Type' name = 'Car Type' placeholder= 'car Type' value= {carType} onChange = {this.onChange} type = 'phone' 
                                    />
                                      <TextInputGroup 
                                        label= 'Car Number' name = 'phone' placeholder= 'car Number' value= {carNumber} onChange = {this.onChange} type = 'phone' 
                                    />
                                  
                                      <TextInputGroup 
                                        label= 'Driving License' name = 'phone' placeholder= 'Enter Driving license' value= {drivingLicense} onChange = {this.onChange} type = 'phone' 
                                    />
                                      <TextInputGroup 
                                        label= 'ID' name = 'phone' placeholder= 'Enter ID' value= {_id} onChange = {this.onChange} type = 'phone' 
                                    />
                                    <div class="d-grid col-6 mx-auto">
                                        <input class="btn btn-danger mt-2" value="Update Contact" type="submit" />
                                    </div>  
                                </form>
                            </div>
                        ) : null } 
                    </div>
                )

            }}
        </Consumer>
    )
  }
}

export default EditContact