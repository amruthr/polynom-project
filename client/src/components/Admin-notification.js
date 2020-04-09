import React, { Component ,  useState }  from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Form, FormGroup, Label,Col, Container, UncontrolledButtonDropdown , Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import {storage} from '../firebase/index';


class AdminNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: '',
      data: '',
      url:''
    };
/*     this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this); */
  }

 /*  handleChange = e => {
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
      const uploadTask = storage.ref(`travelcrest/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 1000);
         this.setState({progress});
         this.setState({upload:"uploading"});
      }, 
      (error) => {
           // error function ....
        alert(error);
      }, 
    () => {
        // complete function ....
        storage.ref('travelcrest').child(image.name).getDownloadURL().then(url => {
            const x = this.state.url
            x[i] = url
            this.setState({url:x});
            this.setState({images: x})
            this.setState({upload:"uploaded"});
        })
    });
   } ) } */
  //===================img uploader functions^^

componentDidMount(){ }
  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }
  onSubmit = (
    title, 
    data, 
    url) => {
    axios.post('/fcm/notify', {
      title,
     data,
      url
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangeData = (e) => this.setState({data: e.target.value})
  onChangeurl = (e) => this.setState({url : e.target.value})

  render() {
    const { title, data, url } = this.state
    const style = {
      height: '100px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px',background:"aliceblue", color:"black",fontFamily:"Roboto"}}>
      <h1>Send Notification</h1>
      <Form style={{fontSize:'12px'}} >
        <FormGroup>
          <Label for="exampleEmail">notification Title</Label>
          <Input placeholder='Notification heading' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Notificaton Data</Label>
          <Input placeholder='description of the notification ' value={this.state.data} onChange={this.onChangeData} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">URL</Label>
          <Input placeholder='What clicking on this notification will do' value={this.state.url} onChange={this.onChangeurl} />
        </FormGroup>
       
      </Form>
      <Button onClick={()=>this.onSubmit(
        title, 
        data, 
        url
        )}>Submit</Button>
      </Container>
    );
  }
}


export default AdminNotification;