import React from 'react'
import {
  isMobile
} from "react-device-detect";
import ButtonLinkGenderPage from './Button-link-gender-page'
import { Jumbotron, Container } from 'reactstrap';

const styles = {
  bannerCoverPc: {
   // backgroundImage: 'linear-gradient(to right, #fefefe, #fff)',
    backgroundSize: 'cover',
    height: '150px',
  },
  bannerCoverMobile: {
    backgroundImage: 'url("/images/banner-cover-mobile.jpg")',
    backgroundSize: 'cover'
  },
  textBanner: {
    textShadow: "0px",
    textAlign: 'center',
    color:'black',
    fontFamily:'Samarkan, Montserrat, Roboto',
    fontSize:'100px',
    margin: 'auto',
    background: '#ffbf00',
    width:'fit-content',
  },
  textNone:{
    display:'none',
  },
  centerButtons: {
    right:'5px',
    padding: '10px',
    height: '300px',
    position:'relative',
    top:'0px',
    textAlign:'center',
    backgroundRepeat: 'no-repeat',
  },
  titleH1Pc: {
    fontSize: '80px'
  },
  titleH1Mobile: {
    fontSize: '60px'
  }
};

const { bannerCoverPc, bannerCoverMobile, textNone, textBanner, centerButtons, titleH1Mobile, titleH1Pc } = styles

const HeroBanner = () => (
  <div style={isMobile? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{height: 'max-height'}}>
      
     
      <div style={centerButtons}>
        <ButtonLinkGenderPage gender={'men'} content='Mens Fashion' /> 
        <ButtonLinkGenderPage gender={'women'} content='Womens Collection' />
        <ButtonLinkGenderPage gender={'kids'} content='Kids Zone' />
      </div>
    </Container>
  </div>
);

export default HeroBanner;