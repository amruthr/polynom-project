import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import {
  isMobile
} from "react-device-detect";
import {Button} from 'reactstrap';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
import Particles from 'react-particles-js';
import ShowCategory from '../components/ShowCategory';
import Services from '../components/services'
const styles = { background:'linear-gradient(17deg , aliceblue , smokewhite)',height: '85vh',width:'100%', margin: '0px', display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};
const spanstyle={
  border:'solid 1px darkgreen',
  background:'darkgreen',
  borderRadius:'45px',
  margin:'10px 18px',
  height:'60px', width:'60px',
  padding:'6px 16px',
  lineHeight:'1.5',
  color:'#fff',
  textShadow: '-3px 2px 0px #000',
  fontSize:'30px'
}



const Homepage = () => (
  <div >
    <Helmet>
      <title>Travel Crest </title>
      <meta name="Travel Crest" content="Book international, pilgrimage, and other packages. Travel and related services, online ticket booking, Railway, Hotel booking, Sight seeing, Bus Booking, wanderlust, hiking , trekking, trips, drving, sight seeing" />
    </Helmet>
    <div><div className="animated wow fadeIn" style={{height:'35vh', margin:'10px 0px', overflow:'scroll'}}>
      <CarouselHomepage/></div>
      <div className="animated wow slideInUp" style={{width:'100%' , textAlign:'center', padding:'30px 0px 30px 0px', background:'#140d2e00', display:'flex', flexFlow:'row wrap'}}>
        <Services homepage={true} />
        </div>
   <ShowCategory/>
    </div>
  </div>
);

export default Homepage;