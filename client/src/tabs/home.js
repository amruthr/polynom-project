import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu , Button, PageHeader, Tabs, Card} from 'antd';
import {Bar} from 'react-chartjs-2'
import BarGraph from '../components/BarGraph'
import Post from '../components/Post'
import BannerCard from '../components/BannerCard'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      totaldue:'',
      upcomingdue:'20000',
      loading:true
    };
  }
  componentDidMount() {
      this.setState({totaldue:'35000'})
  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}

return (
    <div>
    <div style={{ overflow:'scroll', display:'flex', flexFlow:'row nowrap'}}>
        {BannerCard("total due" , this.state.totaldue, "fa fa-inr")}
        {BannerCard("upcoming due" , this.state.upcomingdue, "fa fa-history")}
    
    </div>
    {Post("get to know more","/services", "https://image.freepik.com/free-vector/abstract-classic-blue-background-with-waves_23-2148411555.jpg" )}
 <BarGraph />

</div>

    );
  }
};



export default Home;
