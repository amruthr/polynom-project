import React from 'react';
import {Card,Divider} from 'antd';
const { Meta } = Card;
const Post = (title ,  url, img, color1, color2)=>{
    return(
        <Card onClick={()=>window.location.href=url} style={{backgroundImage:img==="danger"?'linear-gradient(330deg, #fa8072, #ffa07a)':img?'url('+ img+')':'linear-gradient(330deg,'+color1+', '+color2+')', margin:'15px 10px',border:'none', borderRadius:'5px', textAlign:'left', color:color1==="#fff"?"#000":'#fff', boxShadow:'0px 2px 20px lightgrey'}}>
            {title}
            <span className="fas fa-angle-right" style={{right:'10px', position: 'absolute',fontSize: '30px'}} />
            </Card>
    )
}

export default Post;