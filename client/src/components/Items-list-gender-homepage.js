import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";
import LoadingGif from './Loading-gif';
import ButtonLinkGenderPage from './Button-link-gender-page'
import { connect } from 'react-redux';
import { 
  sortArgsForFilter, 
  keywordsForFilter, 
  actionSizeForFilter,
  oneKeywordForFilter, 
  fetchDataApi,
  actionPriceRangeFilter,
  actionFillFilters
} from '../actions/DataFetchingActions';
import { 
  Container,
  Row,
  Col
} from 'reactstrap';

class  shopByPrice extends Component {

    constructor(props){
      super(props);
      this.myRef = React.createRef() 
      this.state = {
       categories :[]
      };
    };
  

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch(`/api/packages/${this.props.match.params.gender}`)
      .then(response => {        
        return response.json();
      })
      .then((data) => {        
        this.setState({
          categories: data.map(item=>({
            id: item._id,
            price: item.price, 
            name:item.title,
            img:item.images.map(img=>img),  
            highlights: item.highlights         ,
            days:item.days,  
            nights: item.nights
          }))
        });
      });
  }   

  render() {
    const {categories} = this.state;
    const cards = categories.map(x => {
    return(
      <Link  to={`/package/${x.id}`} key={x.id} className="row wow animated fadeIn container" 
style = {{width: isMobile?'96%':'21%',
    border: 'none',
    borderRadius:'20px',
    margin:'5px',
    marginTop:'25px',
    background: '#fff',
    padding: '10px',
    color:'white',
    height:'30vh',    
    boxShadow:'0px 0px 20px lightgrey',position:'relative'}}> 
  {x.img.map((item)=><img  style = {{ 
      width:'40%', position:'absolute', borderRadius:'10px', top:'10px',padding:'0px',
      padding:'0px', }} src={item}/> )}
     <Col className="col-5"></Col>
     <Col className="col-7"><Row> <span style={{textAlign:'left',overflow:'hidden',padding:'05px', margin:'5px', width:'auto', fontSize:'18px', fontWeight:'bold',fontFamily:'Roboto', color:'#000'}}>
     {x.name} </span></Row><Row>
    <span style={{textAlign:'left',borderRadius:'10px', overflow:'hidden', background:'lightgreen',padding:'2px 4px',margin:'5px 10px', width:'auto', fontSize:'18px', fontWeight:'bold',fontFamily:'Sen', color:'#000'}}>
    &#8377;{x.price}</span> </Row>
    <Row>
    {x.highlights.map((highlight)=><span style={{textAlign:'left',borderRadius:'10px', overflow:'hidden', background:'lightblue',padding:'2px 8px',margin:'6px', width:'auto', fontSize:'12px', fontWeight:'bold',fontFamily:'Sen', color:'#000'}}>
    {highlight}</span>)}
    </Row>
    <Row>
    <span style={{textAlign:'left', overflow:'hidden',padding:'2px 4px',margin:'5px 10px', width:'auto', fontSize:'13px', fontWeight:'bold',fontFamily:'Sen', color:'#000'}}>
 {x.days} days | {x.nights} nights</span> </Row>
    </Col>
     </Link>
    )
    })
    
    return(
     <div style={{minHeight:'100vh'}} ref={this.myRef} >
       {this.state.categories.length>0? 
       <h2 style={{margin:'20px', fontFamily:'Montserrat'}}>
          {this.props.match.params.gender} Packages</h2>
     :<div style={{margin:'5px', fontFamily:'Montserrat', width:'100%'}}><LoadingGif /></div>}
     {this.state.categories.length>0? <div style = {{display:'flex', flexFlow:'row wrap', width:isMobile?'100%':categories.length*24+'%', background:'#fff', }}>{cards}</div>:''
  }</div>
    )

  }
} 

export default shopByPrice;