import React, { Component ,  useState }  from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Form, FormGroup, Label,Col, Container, UncontrolledButtonDropdown , Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Progress} from 'reactstrap';
import axios from 'axios';
import {storage} from '../firebase/index';
// import {storage} from '@firebase/storage'


class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: '',
      tags: '',
      images: [],
      description: '',
      price: 0,
      success: false,
      ndays:1  ,
      nights: 1,
      includes:[],
      doesnotinclude:[],
      highlights:[],
      taginput: true,
      catoptions:[],
      image: null,
      url: [],
      progress: 0,
      daysalert:'',
      upload:"upload",
      noofimgs:["1"],
    };
    this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
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

componentDidMount(){
  fetch('/api/shopbyprice') 
  .then(response => {        
     return response.json();
   })
   .then((data) => {        
     this.setState({
       catoptions: data.map(x=>({
         valuex: x._id
       }))
     })
    });
    
}

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  onSubmit = (
    title, 
    price, 
    highlights,
    includes, 
    nights,
    tags,
    images,
    description,
    ndays,
     doesnotinclude) => {
    axios.post('/api/add/item', {
      title,
      price,
      highlights:(highlights.split(',')),
    includes:(includes.slice(0)+'').replace(/\s/g,'').split(','),
    doesnotinclude: (doesnotinclude.slice(0)+'').replace(/\s/g,'').split(','),
    days:ndays,    
    nights,
      tags: (tags.slice(0)+'').replace(/\s/g,'').split(','),
      images: (images.slice(0)+'').replace(/\s/g,'').split(','),
      description: description === undefined?'':description, 
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangePrice = (e) => this.setState({price: e.target.value})
  onChangeHighlights = (e) => this.setState({highlights: e.target.value})
  onChangeIncludes = (e) => this.setState({includes: e.target.value})
  onChangeDNIncludes = (e) => this.setState({doesnotinclude: e.target.value})
  onChangeTags = (e) => this.setState({tags: [e.target.value]})
  onChangeDescription = (e) => this.setState({ description: e.target.value })
  enableTagsInput =(e) => {this.setState({taginput: false})  }
  onChangeDays = (e) => {
   e>0? this.setState({ndays:e}) :alert("Cannot set days in negative")
  }
  onChangeNights = (e) => {
    e>0? this.setState({nights:e}) :alert("Cannot set nights in negative")
   }

  render() {
    const {catoptions} = this.state
    const quantity =()=> {
     // this.state.sizes.map( x =>{   
        <FormGroup>
          <Label for="exampleEmail">ji</Label>
          <Input placeholder='example: XS: 10, L:3, XL:20' value="0" onChange={this.onChangeqty} />
        </FormGroup>      
   // })
    }

    const CategoryData = ()=>{
         return (
           <div>
          {catoptions.map(x=>
           <DropdownItem onClick={this.onChangeTags} value= {x.valuex} >{x.valuex}</DropdownItem>      
          )}
          </div>
        ) }

    const { title, price, highlights, nights, includes, doesnotinclude, days, ndays, noofimgs, tags, images, description } = this.state
    const style = {
      height: '100px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px',background:"aliceblue", color:"black",fontFamily:"Roboto"}}>
      <h1>Add new item</h1>
      <Form style={{fontSize:'12px'}} >
        <FormGroup>
          <Label for="exampleEmail">Package name</Label>
          <Input placeholder='Package Name' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input placeholder='Price in Rs.' value={this.state.price} onChange={this.onChangePrice} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Package Highlights</Label>
          <Input placeholder='Explain features of this package' value={this.state.highlights} onChange={this.onChangeHighlights} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Package Includes</Label>
          <Input placeholder='What does this package covers?' value={this.state.includes} onChange={this.onChangeIncludes} />
        </FormGroup>        
            <FormGroup>
          <Label for="exampleEmail">Package does not include</Label>
          <Input  placeholder='items this packages does not provide...' value={this.state.doesnotinclude}  onChange={this.onChangeDNIncludes} />
          </FormGroup> 
      <FormGroup>
        <Label for="exampleEmail">Category  :</Label>
     <div className="" style={{display:"flex"}}>  <div > <UncontrolledButtonDropdown direction="down" onChange={this.onChangeTags}>
      <DropdownToggle  onChange={this.onChangeTags}>
        Choose
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>select from list</DropdownItem>
  <CategoryData/>
        <DropdownItem divider />
        <DropdownItem style= {{background:'dodgerblue', border:'Solid 10px white', color: 'white'}}onClick = {this.enableTagsInput}>new Category</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown></div>
  <div> 
   <Input style={{display:this.state.taginput?"none":"block"}} disabled={this.state.taginput} autofocus ={!this.state.taginput} autoFocus ref={(input) => { this.nameInput = input; }} placeholder='Enter the new category' value={this.state.tags} onChange={this.onChangeTags} />
  </div></div>
     </FormGroup>            
        <FormGroup style={{textAlign:'center'}}>
        <Button style={{margin:'2px 20px'}} onClick={()=>this.onChangeDays(this.state.ndays-1)}>-</Button>      
    <Label for="examplePassword">Number of Days : {this.state.ndays}</Label>
    <Button style={{margin:'2px 20px'}} onClick={()=>this.onChangeDays(this.state.ndays+1)}>+</Button>
    <small style={{color:'red'}}>{this.state.daysalert}</small>
         </FormGroup>
         <FormGroup style={{textAlign:'center'}}>
        <Button style={{margin:'2px 20px'}} onClick={()=>this.onChangeNights(this.state.nights-1)}>-</Button>      
    <Label for="examplePassword">Number of Nights : {this.state.nights}</Label>
    <Button style={{margin:'2px 20px'}} onClick={()=>this.onChangeNights(this.state.nights+1)}>+</Button> 
         </FormGroup>
         <Label for="exampleEmail">Images</Label>
         <FormGroup style={{display:'flex', fontSize:'1rem',flexDirection:'column', flexWrap:'wrap', alignItems:'center' }}>
        
        <div >      
      <input type="file" multiple  onChange={this.handleChange}/>
      </div><div style={{width:'100%',margin:'10px'}} >     
      <Progress  animated={this.state.upload=="uploading"} color="success" value={this.state.progress} max="1000" style={{width:'100%'}}/>
      </div><div style={{width:'100%', textAlign:'center', margin:'10px 0px'}} >     
    <button onClick={this.handleUpload } disabled={this.state.upload==="upload"?false:true}>{this.state.upload}</button>
      </div><div >   
      {this.state.url.map((src, i)=>
      <img src={src} key={i} alt={"image "+i} height="60" width="80"/>
   )} 
      </div>
      <Input type="text"  placeholder='' value={this.state.url.map((item)=>" "+item)}  />
      </FormGroup>


        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
        </FormGroup>
      </Form>
      <Button onClick={()=>this.onSubmit(
        title, 
        price, 
        highlights,               
        includes, 
        tags,
        images,
        description,
        ndays, nights,
         doesnotinclude //9 inputs
        )}>Submit</Button>
      </Container>
    );
  }
}


export default AdminFormAddItem;