import React from 'react';
import {Card,Divider} from 'antd';
import { Tag } from 'antd';

const { Meta } = Card;
const Postx = (title , desc, url, tag,  hsn, price, tax, unit , init_stock )=>{
    return(
        <Card title={<div><p style={{fontSize:'20px',fontWeight:'bolder'}}>{title}   <Tag  color={tag=="product"?"magenta":'lightgreen'}>{tag}</Tag></p>
      <span>{desc}</span></div>} extra={ <span className="fas fa-pen"/>} onClick={()=>window.location.href=url} style={{ margin:'35px 10px', borderRadius:'5px', textAlign:'left', color:'#000', boxShadow:'0px 1px 20px lightgrey'}}>
    <Card.Grid  style={{width:'50%'}}> HSN number: {hsn}</Card.Grid >
    <Card.Grid  style={{width:'50%'}}> Item Price: {price}</Card.Grid >
    <Card.Grid  style={{width:'33.33%'}}>Tax rate: {tax}</Card.Grid >
    <Card.Grid  style={{width:'33.33%'}}>Unit:  {unit}</Card.Grid >
    <Card.Grid  style={{width:'33.33%'}}>Initial Stock: {init_stock}</Card.Grid >
        </Card>
    )
}

export default Postx;