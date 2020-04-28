import PropTypes from 'prop-types';
import React, { Component , useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";
import axios from 'axios'
import LoadingGif from './Loading-gif';
import ButtonLinkGenderPage from './Button-link-gender-page'
import { connect } from 'react-redux';
import Stories from 'react-insta-stories';
import moment from 'moment';
import { 
  Container,
  Row,
  Col
} from 'reactstrap';

class  Story extends Component {

    constructor(props){
      super(props);
      this.state={
        newsList: '',
        isDone:false
      }
    }

     componentDidMount() 
     {
      axios.get('/api/carouselData')
      .then(response => {       
          console.log(response) 
        return response.data
      })
      .then((data) => {        
        this.setState({          
            newsList: data.map((item, index)=>({
             content:
             ({action, isPaused}) => {
              const handleClick=(e)=>{e.preventDefault(); action(isPaused ? 'play': 'pause') }
              localStorage.setItem("storyIndex" , index)          
              return (                          
             <div onClick={handleClick} style={{width:'100vh'}}>
            <h2 style={{color:'#fff',margin:'20px 10px 15px 10px', fontFamily:'Montserrat'}} className="wow animated fadeIn">{item.caption}</h2>            
            <img style={{width:'100%',overflow:'hidden',margin:'10px 0px 5px 0px'}} src={item.src}/>
            <h5 style={{color:'#fff',margin:'10px'}}>{item.author}</h5>          
            <div className="" style={{animationDuration:'0.2s' , position:'fixed', zIndex:'1001', bottom:'0px',width:'100%',height:'150px', backgroundImage:'linear-gradient(to bottom, #00000033, #000)'}}>
              <p style={{fontSize: '21px',
               width: 'maxContent',
               background: '#fff',
               padding: '10px', zIndex:'1001',
               borderRadius: '49px',
               margin: '2vh 15vh 27vh 15vh', fontFamily:'Montserrat', textAlign:'center', userSelect:'none'}} onClick={()=>window.location.href=item.url}> see more</p>
            </div>
            </div>
                          )
             },
            }))
          });  
          //to concat to state   ... u need to code here
        })                       
    }

  render() {

    const stories = [
     ];
     const width = window.innerWidth
    return(
      <div style={{width:'100%'}} className={"wow animated fadeIn"}>
      <Stories style={{width:'100vh'}}
                stories={ this.state.newsList || stories}        
                defaultInterval={3500}
				width={width}
        height={768}      
       
        onAllStoriesEnd = {()=> window.history.back()}
            />
            </div>
    )
  }
} 

export default Story;