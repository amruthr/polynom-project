import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'reactstrap';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
import Particles from 'react-particles-js';
const styles = { background:'linear-gradient(17deg , #1f1f1f , smokewhite)',height: '85vh',width:'100%', margin: '0px', display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};

const Homepage = () => (
  <div style={{background:"#03dac6"}} >
    <Helmet>
      <title>My India Offers</title>
      <meta name="My India Offers" content="My India Offers , Offers In and around mangalore Get the best deals" />
    </Helmet>
    <div style={{height:'60vh', background:'#1f1f1f', padding:'10px', borderBottomRightRadius:'100px'}}>
    <p className=" text-bold wow animated fadeIn" style={{color:"#03dac6", fontFamily:'Montserrat', fontSize:'400%', width:'60%',}}>My India Offers</p>
    <p className=" wow animated fadeIn" style={{color:"#03dac6"}}>Launching soon</p>

    </div>
    <div style={{height:'40vh', background:'#03dac6', position:'relative' }}>
      <img src="/images/logo.png" className="wow animated rotateIn" style={{position:'absolute',width:'180px', top:'-100px',right:'10px', margin:'10px', borderRadius:'200px', boxShadow:'0px 10px 20px #ff0000aa',}}/><br/> 
    <Link className="wow animated slideInUp" to={`/register`} style={{position:'absolute', bottom:'15vh',left:'20px'}}><Button size="lg" style={{borderRadius:'40px', background:'#1f1f1f', color:"#03dac6" , border:'none',top:'80vh',padding:'10px 20px', boxShadow:'2px 2px 20px grey' , } }>Book Free Trial</Button></Link>
    </div>
  </div>
);

export default Homepage;