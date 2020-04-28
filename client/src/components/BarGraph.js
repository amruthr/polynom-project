import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu , Button, PageHeader, Tabs, Card} from 'antd';
import {Bar} from 'react-chartjs-2'
class BarGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      totaldue:'',
      upcomingdue:'20000',
      loading:true,
      data: [],
      labels:[]
    };
  }
  componentDidMount() {
    this.setState({labels:['January', 'February', 'March',
    'April', 'May', 'June', 'July']})
    this.setState({data:[22, 50, 30, 40, 60, 25, 30]})
  }

  week =() =>{
    this.setState({labels:['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday']})
    this.setState({data:[52, 34, 50, 20, 20, 55, 30]})
  }

  year = ()=>{
    this.setState({labels:['January', 'February', 'March',
    'April', 'May', 'June', 'July']})
    this.setState({data:[22, 50, 30, 40, 60, 25, 30]})
  }
  month = ()=>{
    this.setState({labels:[1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]})
    this.setState({data:[40, 60, 25, 30,22, 50, 30, 40, 60, 25, 30,22, 50, 30, 40]})
  }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}

return (
    <div style={{margin:'10px'}}>
        <p style={{textAlign:'right', fontSize:'18px', margin:'0px 10px'}}>Total: {this.state.data.reduce((sum, item)=>item+sum, 0)}</p>
   <div className="buttons container" style={{display:"flex", flexFlow:'row nowrap', width:'100%', justifyContent:'space-around'}}>
    <Button type="default" onClick={this.week}>Week</Button>
    <Button type="default" onClick={this.month}>Month</Button>
    <Button type="default" onClick={this.year}>Year</Button>
    </div>
    <Bar data={{
    labels: this.state.labels,
    
    datasets: [{
        data: this.state.data ,
        label:'Revenue',
        backgroundColor: '#072a48',
    }]
    }} width={100} height={80} />
</div>

    );
  }
};



export default BarGraph;
