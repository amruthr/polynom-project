import React, { Component } from 'react';
import axios from 'axios';
import AdminTablesItems from './Admin-table-items'
import AdminFormAddItem from './Admin-form-add-item'
import AdminHistoryLog from './Admin-history-log'
import AdminNotification from './Admin-notification'
import AdminPromos from './Admin-promos'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {
  isMobile
} from "react-device-detect";
export default class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
      apiList: [],
      activeTab: '3'
    }
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('/api/productsdata')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
  }

  toggle = tab => this.state.activeTab !== tab && this.setState({ activeTab: tab });

  render() {

    const styles = {
      tabx: {
        cursor: 'pointer',      
        color:'white',
      },
    }

    return (
      <div style={{display:'flex'}}>
   { !isMobile &&     <Nav vertical style={{background:'#050505'}} className="col-md-2">
{/*           <NavItem>
            <NavLink style={styles.tabx} onClick={() => { this.toggle('1'); }}>
              <b>Orders</b>
            </NavLink> 
          </NavItem>
          <NavItem>
            <NavLink style={styles.tabx} onClick={() => { this.toggle('2'); }}>
              <b>Update/delete items</b>
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink style={styles.tabx} onClick={() => { this.toggle('3'); }}>
              <b>Add new item</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.tabx} onClick={() => { this.toggle('4'); }}>
              <b>Promos and Trending</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.tabx} onClick={() => { this.toggle('5'); }}>
              <b>Marketing & Notification</b>
            </NavLink>
          </NavItem>
      </Nav>
 }
        <TabContent className="col-md-10" style={{height:'-webkit-fill-available'}} activeTab={this.state.activeTab}>
{/*           <TabPane tabId="1">
            <AdminTableOrders stylesTab1={styles.tab1}/>
          </TabPane>
          <TabPane tabId="2">
            <AdminTablesItems stylesTab2={styles.tab2}/> 
          </TabPane> */}
          <TabPane tabId="3" style={styles.tab3}>
            <AdminFormAddItem />
          </TabPane>
          <TabPane tabId="4">
            <AdminPromos stylesTab4={styles.tab4} />
          </TabPane> 
          <TabPane tabId="5">
            <AdminNotification stylesTab4={styles.tab4} />
          </TabPane> 
        </TabContent>
      </div>
    )
  }
};
