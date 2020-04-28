import React, { Component } from 'react';
import {
  isMobile
} from "react-device-detect";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Col,
  Row,
} from 'reactstrap';
import ButtonInternalLink from './Button-internal-link';
import { Link } from 'react-router-dom';
var color   = require('dominant-color')
const styles = {
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color:'#dodgerblue',
background:'#fff',
width:'100%',
textDecoration:'none',
    
    
  },
  fixDown:{
       
        width:'100%',
        textAlign: 'center',
        alignItems: 'center',        
        justifyContent : 'center',
        marginLeft:'10px!important',      
        
  }
}


class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
      items: [],
    } 
   };
 
  componentDidMount() {
    fetch('/api/carouselData')
      .then(response => {        
        return response.json();
      })
      .then((data) => {        
        this.setState({
          items: data.map(item=>({
            caption: item.caption,
            src: item.src,
            mobilesrc : item.mobilesrc,
    title: item.caption,
    subtitle: 'Check our nice collection',
    btn: {
      content: 'Go to the collection',
      link: '/category/men'

    }
          }))
        });
      });
  }   

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false; //change to fals
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render() {
    const { activeIndex } = this.state;
    const {items} = this.state;
    const slides =  items.map(x => { 
      return (
       <div        
          key={x.src}>
             <Link to={'stories?s='+x.src}>      
            <Col md={isMobile?"6":"12"}> 
            <img src={isMobile?x.mobilesrc:x.src} alt={x.altText}
             style={{ width:isMobile?'100%':'auto',
             height:'30vh', filter: 'brightness(1)', margin:'0px 10px', borderRadius:'10px',
             boxShadow:'0px 10px 20px grey'}}/>
            </Col>      
          </Link> </div>
      );
      });

    return (
      
      <div style={{height:'30vh', display:'flex',margin:'5px 0px', width:items.length*40+"%",}}  >
        {slides}
      </div>      
    );
  }
}


export default CarouselHomepage;
