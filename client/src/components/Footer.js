import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const styles = {
    backgroundColor: '#000',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: 'white',
    textAlign: 'center'
}
 
const Footer = () => (
  <div style={styles}>
    <Container>
      
     {/*  <Row>
        <Col md='4'>About </Col>
        <Col md='4'>Contact Us</Col>
        <Col md='4'>Instagram</Col>
      </Row> */}
           <Row>
        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>My India Offers © </Col>
      </Row>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>2020 All Rights Reserved</Col>
      </Row>
    </Container>
  </div>    
)

export default Footer;