import React, { Component } from 'react';
import {
  isMobile
} from "react-device-detect";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Container , Col} from 'reactstrap';
import Palette from 'react-palette';
import EditCategory from './EditCategory';
import AdminFormDeleteItem from './Admin-form-delete-item';
import CarouselItemPage from './Carousel-item';
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
     <h2 style={{fontFamily:'roboto',fontWeight:'bolder', margin:'10px'}}>Packages</h2>
     { isAdmin &&  <h1>Update or Delete Categories</h1>}
      <Container style={{display:"flex", flexDirection: 'row',
    flexFlow: 'wrap',
    alignItems:'center', padding:'0px', 
      position:'relative',  width:'100%', marginBottom:'10vh',}}>
       
        {
          apiList.map((x, index)=>               
            <div  className={`wow animated ${(index+1)%2?"slideInLeft":"slideInRight"}`} style={{background:'#3e39dc00',
             backgroundRepeat:'round', width:isMobile?'98%':'31%', 
             borderRadius:'20px',margin:'10px 10px 50px 10px',minHeight:'300px', boxShadow:'1px 1px 20px lightgray', padding:'0px', 
              position:'relative'}} key={x._id}>              
              { <Link to={`/packages/${x._id}`} style={{color:'#000', textDecoration:'none',}}>  
              {}
              <CarouselItemPage imgsArray={x.images} />         
              <div style={{ bottom: '65px', position:'absolute', fontSize:'60%', }}>                               
        {isAdmin &&  <EditCategory infos={x} /> }
           {x.subcats && x.subcats.map((item, ind)=>
               <div  style={{background:'#f5f5f5', borderRadius:'20px' ,width: 'fit-content', 
               padding: '3px 10px',margin :'5px', border:'solid 0.5px lightgrey', 
               position:'relative',float:'left', height:'max-content',}}> {item}</div>
              )}     
              </div>          
               </Link>}
                <p style={{
                  zIndex: '999',
                  color: '#000',
                  width: 'fit-content',
                  margin: '10px',
                  fontSize:'1.2rem',
                  fontFamily:'Montserrat',
                  fontWeight:'bolder',
                  position:'relative',
                  bottom:'-0px'
                   }}>{x._id} packages starting from {x.price} </p>                   
               </div>                                       
             )
          }
        </Container>
      </div>
    )
  }
};
