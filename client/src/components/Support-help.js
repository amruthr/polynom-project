import React, { Component } from 'react';
import { Container, Row, Button , Modal, ModalHeader, ModalBody, ModalFooter,} from 'reactstrap';
import {
    isMobile
  } from "react-device-detect";
const styles = {
    position:'fixed',
    background:'dodgerblue',
    color:'#fff',
     bottom:isMobile?'6vw':'2vw',
     right: isMobile?'6vw':'2vw',
     width:'15vw',
     borderRadius:isMobile?'30px':'50px',
     border:'none',
     boxShadow:isMobile?'0px 10px 20px #1e90ff88':'0px 5px 10px #1e90ff88',
     height:isMobile?'15vw':'5vw'
}

class  SupportHelp extends Component {

  constructor(props){
    super(props);
    this.state={    
      isOpen:false
    }
  }
  toggle = () => this.setState({isOpen:!this.state.isOpen});
render(){
  const modalbuttons ={
    borderRadius:'30px',
    margin:'20px',
    padding:'20px',
    color:'white', 
    
  }
 return( 
  <div>
     <Button style={styles} onClick={this.toggle} className="fas fa-headset">{!isMobile && "How may I help you?" }</Button>
  <Modal style={{height:'90px', padding:'20px'}} isOpen={this.state.isOpen}>
    <ModalHeader style={{textAlign:'center'}}>We are happy to help you😊 </ModalHeader>
    <ModalBody style={{textAlign:'center'}}>
      <span className="fa fa-phone" style={modalbuttons}> contact us</span>
    </ModalBody>
    </Modal>
   </div>
 )
}
}
export default SupportHelp;