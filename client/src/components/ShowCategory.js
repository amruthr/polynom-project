import React, { Component } from 'react';
import {
  isMobile
} from "react-device-detect";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Container , Col} from 'reactstrap';
import EditCategory from './EditCategory';
import AdminFormDeleteItem from './Admin-form-delete-item';
import CarouselItemPage from './Carousel-item';
import { messaging } from '../firebase'
export default class Category extends Component {
  constructor(props){
    super(props);
    this.state={
      apiList: []
    }
  }
  
  async componentDidMount() {
    try {
      const response = await axios.get('/api/shopbyprice')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
!messaging?alert("Notifications not supported"):
    messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken().then((currentToken) => {
        if (currentToken) {
         axios.post(`fcm/addtopic`, {id: currentToken});  
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.      
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
      ;    
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message)); 
  messaging.onMessage((payload) => alert('Message received. ', payload));
  }

  render() {
    const stylesColor = (color) => ({
      textDecoration: 'underline',
      textDecorationColor: color
    })

    const { stylesTab2 } = this.props
    const { apiList } = this.state
    const isAdmin = this.props.admin
    return (
      
      <div style={{paddingTop: '0px', paddingBottom:'20px', background:'#fff',minHeight:'100vh'}}>
     <h2 id="packages" style={{fontFamily:'roboto',fontWeight:'bolder', margin:'10px', color:'#000'}}>Packages</h2>
     { isAdmin &&  <h1>Update or Delete Categories</h1>}
      <Container style={{display:"flex", flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems:'center', padding:'0px', 
      position:'relative',  width:'100%', marginBottom:'10vh',}}> 
        {
          apiList.map((x, index)=>               
            <div  className={`wow animated fadeIn`} style={{
             backgroundRepeat:'round', width:isMobile?'100%':'31%', 
             borderRadius:'20px',height:'fit-content', border:'none',margin:'1px 10px 40px 10px',minHeight:'300px', padding:'10px', 
              position:'relative'}} key={x._id}>              
              { <Link to={`/packages/${x._id}`} style={{color:'#000', textDecoration:'none',}}>  
              {}
              <img src ={x.images[0]}  style={{width: '100%', height:!isMobile&&'250px' , borderRadius:'20px',}} />         
              <div style={{ top: '30px', position:'absolute', fontSize:'80%', }}>                               
        {isAdmin &&  <EditCategory infos={x} /> }
           {x.subcats && x.subcats.map((item, ind)=>
               <div  style={{background:'#f5f5f5', borderRadius:'20px' ,width: 'fit-content', 
               padding: '3px 10px',margin :'15px', border:'solid 0.5px lightgrey', 
               position:'relative',float:'left', height:'max-content',}}> {item}</div>
              )}     
              </div>          
               </Link>}
                <div className="container"  style={{                
                  fontSize:'1.2rem',
                  fontFamily:'Montserrat',
                  fontWeight:'bolder',
                  padding:'0px',
                  margin:'10px 4px',
                  display: "flex"}}>
                    <div className="col col-sm-6">{x._id} packages </div> 
                    <div className="col col-sm-6" style={{textAlign:'right',fontSize:'1rem',}}><small>starting at </small>Rs.{x.price} </div>           
                 </div>                
             </div>                                       
             )
          }
        </Container>
      </div>
    )
  }
};
