import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import Home from '../tabs/home'
import Invoices from '../tabs/Invoices'
import Items from '../tabs/items'
import Report from '../tabs/reports'

import { Affix,Layout, Menu , Button, PageHeader, Tabs} from 'antd';
class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  componentDidMount() {
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={border:'none',margin:'0px',marginBottom:'80px'}
return (
   /*  <div style={{ bottom:'0px', margin:'0px 0px', background:'#fff', }} offsetBottom={0}> */
    <Tabs  tabPosition="bottom" tabBarStyle={{display:'flex', background:'#fff', flexFlow:'column wrap', width:'100%',alignItems:'center',bottom:'0px', position:'fixed', margin:'0px'}}>{/* tab gutter should be kept n*10-10 n= no.of tabs*/}
    <TabPane tab={<div style={{textAlign:'center'}}><span className="fas fa-home"/><br/>Home</div>} key="1" style={areastyle} >
      <Home/>
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center'}}><span className="fas fa-file-text"/><br/>Invoices</div>} key="2" style={areastyle}>
     <Invoices />
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center', background:'#072a48', color:'#fff', borderRadius:'40px', boxShadow:'0px 4px 4px lightgrey', fontSize:'1.7rem', width:'45px', height:'45px'}}>+</div>} key="3"  style={areastyle}>
     
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center'}}><span className="fas fa-group"/><br/>Account</div>} key="4"  style={areastyle}>
    <Items/>
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center'}}><span className="fas fa-user"/><br/>User</div>} key="5"  style={areastyle}>
      <Report/>
    </TabPane> 
  </Tabs>
  /*   </div> */
    );
  }
};



export default BottomBar;
