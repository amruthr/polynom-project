import React, { Component ,  useState }  from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Form, FormGroup, Label,Col, Container, UncontrolledButtonDropdown , Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Progress} from 'reactstrap';
import axios from 'axios';
import {storage} from '../firebase/index';
// import {storage} from '@firebase/storage'


class AdminAddService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: '',
      body:'',
      images: [],
      icon:null,
      success: false,
      image: null,
      url: [],
      iconurl:'' ,
      progress: 0,
      iconprogress:0,      
      upload:"upload",
      noofimgs:["1"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIcon = this.handleChangeIcon.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.handleIconUpload = this.handleIconUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image =Array.from(e.target.files);
      this.setState(() => ({image}));
      console.log(image)
    }
  }

  handleUpload = (e) => {
    e.preventDefault();
      const {image} = this.state;
      image.map((image,i)=>{
      const uploadTask = storage.ref(`tc/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 1000);
         this.setState({progress});
         this.setState({upload:"uploading"});
      }, 
      (error) => {
           // error function ....
       console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('tc').child(image.name).getDownloadURL().then(url => {
            const x = this.state.url
            x[i] = url
            this.setState({url:x});
            this.setState({images: x})
            this.setState({upload:"uploaded"});
        })
    });
   } ) }
  //===================img uploader functions^^

  handleChangeIcon = e => {
    if (e.target.files[0]) {
      const icon =Array.from(e.target.files);
      this.setState(() => ({icon}));
      console.log(icon)
    }
  }

  handleIconUpload = (e) => {
    e.preventDefault();
      const {icon} = this.state;
      icon.map((icon,i)=>{
      const uploadTask = storage.ref(`tc/${icon.name}`).put(icon);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 1000);
         this.setState({iconprogress:progress});
      }, 
      (error) => {
           // error function ....
       console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('tc').child(icon.name).getDownloadURL().then(url => {
           this.setState({iconurl:url})
        })
    });
    })
     }

   //=====icon uploader function ^^


componentDidMount(){}

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  onSubmit = (
    title, 
   body, 
   iconurl,
   bannerurl) => {
    axios.post('/api/services', {
      title,
     body,
    iconsrc:iconurl.toString(),
     bannersrc: bannerurl
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangeBody = (e) => this.setState({body: e.target.value})


  render() {
   

    const { title, body, url, iconurl} = this.state
    const style = {
      height: '100px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px',background:"aliceblue", color:"black",fontFamily:"Roboto"}}>
      <h1>Add new Service</h1>
      <Form style={{fontSize:'12px'}} >
        <FormGroup>
          <Label for="exampleEmail">Service name</Label>
          <Input placeholder='Package Name' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Description about this service</Label>
          <Input placeholder='Highlights and characteristics about this service in detail' value={this.state.body} onChange={this.onChangeBody} />
        </FormGroup>
       
         <Label for="exampleEmail">Banner Images</Label>
         <FormGroup style={{display:'flex', fontSize:'1rem',flexDirection:'column', flexWrap:'wrap', alignItems:'center' }}>      
        <div >      
      <input type="file" multiple  onChange={this.handleChange}/>
      </div><div style={{width:'100%',margin:'10px'}} >     
      <Progress style={{ width:'100%'}} animated={this.state.upload=="uploading"} color="success" value={this.state.progress} max="1000" />
      </div><div style={{width:'100%', textAlign:'center', margin:'10px 0px'}} >     
    <button onClick={this.handleUpload } disabled={this.state.upload==="upload"?false:true}>{this.state.upload}</button>
      </div><div >   
      {this.state.url.map((src, i)=>
      <img src={src} key={i} alt={"image "+i} height="60" width="80"/>
   )} 
      </div>
      <Input type="hidden"  placeholder='' value={this.state.url.map((item)=>" "+item)}  />
      </FormGroup>

      <Label for="exampleEmail">Icon Image</Label>
         <FormGroup style={{display:'flex', fontSize:'1rem',flexDirection:'column', flexWrap:'wrap', alignItems:'center' }}>      
        <div>      
      <input type="file" onChange={this.handleChangeIcon}/>
      </div><div style={{width:'100%',margin:'10px'}} >     
      <Progress style={{width:'100%'}} animated={this.state.upload=="uploading"} color="success" value={this.state.iconprogress} max="1000" />
      </div><div style={{width:'100%', textAlign:'center', margin:'10px 0px'}} >     
    <button onClick={this.handleIconUpload } >Upload</button>
      </div><div >         
     {this.state.iconurl && <img src={this.state.iconurl}  height="60" width="80"/>}
      </div>
      <Input type="hidden"  placeholder='' value={this.state.iconurl}  />
      </FormGroup>
    
      </Form>
      <Button onClick={()=>this.onSubmit(
        title, 
        body,
        url,
        iconurl//4 inputs
        )}>Submit</Button>
      </Container>
    );
  }
}


export default AdminAddService;