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
    const slides = items.map(x => {
      return (
       <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
          link={x.caption}
        > <Link to={x.caption}>
          <Row  style={isMobile?{backgroundColor: '#fff',height:'80vh'}:{backgroundColor: '#050505', height:'750px'}}>
            <Col md={isMobile?"6":"12"}> 
            <img src={isMobile?x.mobilesrc:x.src} alt={x.altText} style={{ width:'100%', height:'80vh', filter: 'brightness(1)'}}/>
            </Col>
          </Row>
          </Link> </CarouselItem>
      );
    });

    return (
      
      <Carousel
      ride="carousel"
      style={{height:'90vh'}}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        keyboard ={true}
        autoPlay={false}
      >
        {slides}
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
      </Carousel>      
    );
  }
}


export default CarouselHomepage;
