import React from 'react';
import {Card,Divider} from 'antd';
const { Meta } = Card;
const BannerCard = (title,value, sym) =>{//this card for half width
    return(  <Card hoverable style={{margin:'10px', width:'48vw', borderRadius:'5px', textAlign:'center', boxShadow:'0px 0px 10px #fbfbfb'}}>
          <span style={{fontSize:'36px'}} className={sym}/><br/>
          <p>{title}</p>
          <strong style={{textDecoration:'capitalize', color:'darkred'}}>INR {value}</strong>
     
      </Card>  )
  }
export default BannerCard;