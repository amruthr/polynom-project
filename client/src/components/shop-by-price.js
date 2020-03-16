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
    fetch('/api/shopbyprice')
      .then(response => {        
        return response.json();
      })
      .then((data) => {        
        this.setState({
          categories: data.map(item=>({
            catname: item._id,
            price: item.price, 
            img:item.catimg,           
          }))
        });
      });
  }   

  render() {
    const {categories} = this.state;
    const cards = categories.map(x => {
    return(
    <div style = {{width: '200px',
    border: '0px',
    background: '#ffbf00',
    margin: '20px',
    height: '350px',
    display: 'flex',
    borderRadius:'5px',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    margin: '10px 20px',
    alignItems: 'center',}}><img  style = {{position:'relative', width:'100%',height:'300px',padding:'2px' }} src={x.img}/><p>{x.catname} starting at  ₹{x.price}</p></div>
    )
    })
    return(
      <div style = {{display:'flex', flexFlow:'row nowrap', width:'300%', background:'#000', }}>{cards}</div>
    )
  }
} 

export default shopByPrice;