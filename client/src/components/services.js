import PropTypes from 'prop-types';
import React, { Component , useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";
import axios from 'axios'
import LoadingGif from './Loading-gif';
import ButtonLinkGenderPage from './Button-link-gender-page'
import { connect } from 'react-redux';
import Stories from 'react-insta-stories';
import moment from 'moment';
import { 
  Container,
  Row,
  Col
} from 'reactstrap';

class  Services extends Component {

    constructor(props){
      super(props);
      this.state={
        services: [],
        isDone:false
      }
    }

     componentDidMount() 
     {
      axios.get('/api/services')
      .then(response => {       
          console.log(response) 
        return response.data
      })
      .then((data) => {        
        this.setState({          
            services: data           
          });  
          //to concat to state   ... u need to code here
          console.log(this.state.services)
        })                       
    }

  render() {

 const data = this.state.services.map((x, i)=>
{
    return(
 <div style={{backgroundImage:'url(/images/logo.png)', width:'20vw', margin:'10px'}}>{x.title}
   </div> 
    )
})

return(
    <div>{data} </div>
)
  }
} 

export default Services;