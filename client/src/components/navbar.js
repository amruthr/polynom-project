import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import Submenu from '../components/Submenu';

import { Affix,Layout, Menu , Button, PageHeader} from 'antd';
class Topbar extends Component {
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
return (
    <Affix offsetTop={0}>
    <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title={this.props.title}
    extra={[
        <span className="fas fa-bars"/>]}
    style={{height:'8vh', background:'#fff'}}
    />
    </Affix>
    );
  }
};



export default Topbar;
