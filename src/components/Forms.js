import React, { Component } from 'react';


import {fetchUser} from '../redux';

import {connect} from "react-redux";


class Forms extends Component {

    state={
        errors:{
                      email:"",
                      password:""
               }
            }
      
    
            validateAdminHandler=(event)=>
            {
                     let name = event.target.name;
                     let value = event.target.value;
                     let errors = this.state.errors;
    
    
                     switch(name)
                     {
                                 case "email":
                                 errors.email= value.length < 5 ? "email must be 5 characters length" : "";
    
                                 let apos = value.indexOf('@');
                                 let dotpos = value.lastIndexOf('.');
    
                                 if(apos < 1 || dotpos-apos< 2)
                                 {
                                  errors.email="Please enter valid email id";
                                 }
                                 break;
                           case "password":
                                 errors.password = value.length < 5 ? "password is not strong enough" : "";
                                 break;
    
                                 default:
                                 break;
                     }
                     this.setState({errors,[name]:value});    //updating the state 
                }


                submitHandler = (event) => {
                    event.preventDefault();
                    this.props.onAuth(this.state.errors.email.value, this.state.errors.password.value);
                }
            
      
    render() {
        const errors = this.state.errors;
    return (
        <div>
        <div>
       
        <form onSubmit={this.submitHandler}>
        <input type="email" placeholder="enter  ID" name="email" onChange={this.validateAdminHandler}></input>
            <p >{errors.id}</p>
            <input type="password"  placeholder="enter  Password" name="password" onChange={this.validateAdminHandler}></input>
            <p >{errors.password}</p>
            <button id="btnAdmin">login</button>
        </form>
        </div>
        </div>
    );
  }
}


//get the updated state value
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(fetchUser(email, password))
    };
};

export default connect(null,mapDispatchToProps)(Forms);