import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'reactstrap';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
import Particles from 'react-particles-js';
const styles = { background:'linear-gradient(17deg , aliceblue , smokewhite)',height: '85vh',width:'100%', margin: '0px', display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};

const Homepage = () => (
  <div style={{background:"#ec2427"}} >
    <Helmet>
      <title>My India Offers</title>
      <meta name="My India Offers" content="My India Offers , Offers In and around mangalore Get the best deals" />
    </Helmet>
    <div style={{height:'60vh', background:'aliceblue',background:'aliceblue', padding:'10px'}}>
    <p className=" text-bold wow animated fadeIn" style={{color:"#ec2427", fontFamily:'Montserrat', fontSize:'400%', width:'60%',}}>My India Offers</p>
    <p className=" wow animated fadeIn" style={{color:"#ec2427"}}>Launching soon</p>
  <div style={{position:'absolute', top:'10px', right:'10px', width:'30%', background:'#ec2427'}}>a</div> 
    </div>
    <div style={{height:'40vh', background:'#ec2427', position:'relative' }}>
      <img src="/images/logo.png" className="wow animated rotateIn" style={{position:'absolute',width:'180px', top:'-100px',right:'10vw', margin:'0px', border:'solid 15px aliceblue', borderRadius:'200px'}}/><br/> 
    <Link className="wow animated slideInUp" to={`/register`} style={{position:'absolute', bottom:'15vh',left:'20px'}}><Button size="lg" style={{borderRadius:'40px', background:'aliceblue', color:"#ec2427" , border:'none',top:'80vh',padding:'10px 20px', boxShadow:'2px 2px 20px grey' , } }>Book Free Trial</Button></Link>
    </div>
  </div>
);

export default Homepage;