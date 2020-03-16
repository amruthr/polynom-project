import React, { Component } from 'react';
import {
  isMobile
} from "react-device-detect";
import {
  Carousel,
  CarouselItem,
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
    color:'#ffbf00',
    height:'350px',
    
  },
  fixDown:{
    color:'white',
        width:'100%',
        textAlign: 'center',
        alignItems: 'center',
        top: '-50px',
        marginLeft:'10px!important',
        background: '#00000033',
        
  }
}


class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 ,
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
            altText: 'Slide 1',
     caption: 'Slide 1',
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
          link={x.btn.link}
        > <Link to={x.btn.link}>
          <Row  style={{backgroundColor: '#050505', height:'350px'}}>
            <Col md="6">
              <img src={x.src} alt={x.altText} style={{width: '100%', height: 'fitContent', filter: 'brightness(1)'}}/>
            </Col>
            <Col md="6" style={styles.sliderContent , isMobile?styles.fixDown:styles.sliderContent }>
              <h2>{x.title}</h2>
              <p>{x.subtitle}</p>
              <ButtonInternalLink 
                content={x.btn.content}
                link={x.btn.link}
                lightOrDark='dark'
                sizeBtn='lg'
              />
            </Col>
          </Row>
          </Link> </CarouselItem>
      );
    });

    return (
      
      <Carousel
      autoPlay = {true}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        keyboard ={true}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>      
    );
  }
}


export default CarouselHomepage;
