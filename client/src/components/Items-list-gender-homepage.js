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
      this.state = {
       categories :[]
      };
    };
  

  componentDidMount() {
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
            img:item.images,           
          }))
        });
      });
  }   

  render() {
    const {categories} = this.state;
    const cards = categories.map(x => {
    return(
    <div key={x.id}className=" wow animated fadeIn" style = {{width: isMobile?'45%':'21%',
    border: '0px',
    background: '#fff',
    display: 'flex',
    borderRadius:'10px',
    flexWrap: 'wrap',
    padding: '0px',
    color: "#000",
    margin: '20px 8px',
    boxShadow:'1px 0px 20px lightgray',}}><Link to={`/package/${x.id}`}>
      <img  style = {{position:'relative', 
      width:'100%',height:'auto'
      ,padding:'0px' }} src={x.img[0]}/>
       </Link>
  <p className="text-uppercase container">{x.name} - ₹{x.price}</p></div>
    )
    })
    
    return(
     <div>{this.state.categories.length>0? <h2 style={{margin:'20px', fontFamily:'Montserrat'}}>{this.props.match.params.gender} Packages</h2>:<h2 style={{margin:'20px', fontFamily:'Montserrat'}}>Uh oh! Packages not Found</h2>}
     {this.state.categories.length>0? <div style = {{display:'flex', flexFlow:'row wrap', width:isMobile?'100%':categories.length*24+'%', background:'#fff', }}>{cards}</div>:''
  }</div>
    )

  }
} 

export default shopByPrice;