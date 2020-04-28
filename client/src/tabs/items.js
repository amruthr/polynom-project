import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu , Button, PageHeader, Tabs, Card} from 'antd';
import Postx from '../components/postx'
class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loading:true,
      
    };
  }
  componentDidMount() {

  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}


return (
    <div style={{margin:'10px'}}>
    {Postx("My Report","/services")}
    {Postx("Statements Report","/statements")}
    {Postx("Invoice Report","/invoices")}
</div>

    );
  }
};



export default Items;
