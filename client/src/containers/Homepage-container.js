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

const Homepage = () => (
  <div style={{background:"#ec2427"}} >
    <Helmet>
      <title>Travel Crest </title>
      <meta name="Travel Crest" content="Book international, pilgrimage, and other packages. Travel and related services, online ticket booking, Railway, Hotel booking, Sight seeing, Bus Booking, wanderlust, hiking , trekking, trips, drving, sight seeing" />
    </Helmet>
    <div>
   <ShowCategory/>
    </div>
  </div>
);

export default Homepage;