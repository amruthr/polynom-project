import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu ,Tag, Button, Divider, Tabs, Card} from 'antd';
import Post from '../components/Post'
import BannerCard from '../components/BannerCard'

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loading:true,
      dueamount:'',
      totaldue:'',
      upcomingdue:'',
      actions:['Week', 'Month', 'Year', 'daily report', 'Custom'],
      payments:['My Daily', 'My Monthly', 'My Yearly', 'Custom', 'More Reports']
    };
  }
  componentDidMount() {
this.setState({dueamount:'45000'})
this.setState({totaldue:'23000'})
this.setState({upcomingdue:'3000'})
  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}
    const actionTags ={textAlign:'center', width:'30%',background:'lightgray',color:'gray',borderRadius:'4px', margin:'10px 5px'}
    const TagContainer={display:'flex', flexFlow:'row wrap'}
return (
    <div style={{margin:'10px'}}>
        <h2 style={{textAlign:'center'}}>Reports</h2>
        {Post("Total due Amount: INR "+this.state.dueamount, "/services", null, "salmon", "lightsalmon")}
        <div style={{ overflow:'scroll', display:'flex', flexFlow:'row nowrap'}}>
                {BannerCard("total due" , this.state.totaldue, "fa fa-inr")}
                {BannerCard("upcoming due" , this.state.upcomingdue, "fa fa-history")}
        </div>
        <Divider style={{background:'#a72048', color:'#a72048'}}/>
{Post("Invoice reports ","/invoices",undefined, "#fff", "#fff")}
<div style={TagContainer}>
  {this.state.actions.map((item)=> <Tag style={actionTags}>item</Tag>)}
</div>
{Post("Invoice reports ","/invoices",undefined, "#fff", "#fff")}
<div style={TagContainer}>
  {this.state.payments.map((item)=> <Tag style={actionTags}>item</Tag>)}
</div>
</div>
    );
  }
};



export default Report;
