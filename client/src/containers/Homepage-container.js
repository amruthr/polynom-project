import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'reactstrap';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
import Particles from 'react-particles-js';
import ShowCategory from '../components/ShowCategory';
const styles = { background:'linear-gradient(17deg , aliceblue , smokewhite)',height: '85vh',width:'100%', margin: '0px', display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};
const spanstyle={
  border:'solid 1px #cd605b',
  background:'#cd605b',
  borderRadius:'25px',
  margin:'10px 18px',
  padding:'10px 20px',
  color:'#fff'
}

const Homepage = () => (
  <div >
    <Helmet>
      <title>Travel Crest </title>
      <meta name="Travel Crest" content="Book international, pilgrimage, and other packages. Travel and related services, online ticket booking, Railway, Hotel booking, Sight seeing, Bus Booking, wanderlust, hiking , trekking, trips, drving, sight seeing" />
    </Helmet>
    <div>
      <CarouselHomepage/>
      <div style={{width:'100%' , textAlign:'center', padding:'30px 0px 70px 0px', background:'#140d2e00'}}>
        <Link to="#packages"><span style={spanstyle}>packages</span></Link>
        <Link to="/services"><span style={spanstyle}>Services</span></Link>
        </div>
   <ShowCategory/>
    </div>
  </div>
);

export default Homepage;