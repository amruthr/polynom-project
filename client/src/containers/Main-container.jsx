import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import {
  isMobile
} from "react-device-detect";
import {Button} from 'antd';
import 'antd/dist/antd.css';
import Topbar from '../components/navbar';
import BottomBar from '../components/bottomBar';
class Homepage extends Component {

render() {

  return(
  <div >
    <Helmet>
      <title>Project XX</title>
      <meta name="Project RN" content="meta " />
    </Helmet>
    <Topbar title="hello, Kumar" />
    <BottomBar />
  </div>
)
} //render
} //class
export default Homepage;