import React, { Component ,  useState }  from 'react';
import { Button,  ButtonGroup , Input, Form, FormGroup, Label, Container, UncontrolledButtonDropdown , Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';




class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        store:'',
         phone:'',
          state:'',
           district:'',
            noofstores:'',
             taginput:true
    };
  }

  render() {
 
    
    return (
        <div style={{height:'100vh', textAlign:'center'}}>
           <div style={{top:'30vh', position:'absolute'}}> You have successfully registered.<br/>Thank you for your interest. We will get back to you soon.<br/>
            <span className="fa fa-certificate animated wow rotateIn" style={{position:'relative', color:'darkgreen', fontSize:'152px', margin:'20px', textShadow: '0px 1px 50px #afafaf'}}>
                <span className="fa fa-check animated wow fadeIn" style={{color:'#fff', fontSize:'80px', animationDelay:'1s', margin:'20px',top:'15px', left:'5px', position: 'absolute'}}></span></span>
       
       </div><a style={{top:'80vh', position:'absolute', left:'25vw'}} href="tel:8217695603"> Contact for further queries</a></div>
    );
  }
}

export default AdminFormAddItem;