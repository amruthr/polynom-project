import React, { Component ,  useState }  from 'react';
import { Button,  ButtonGroup , Input, Form, FormGroup, Label, Container, UncontrolledButtonDropdown , Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';




class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        store:'',
         phone:'',
          state:'',
           district:'',
            noofstores:'',
             taginput:true,
              loading:false,
              placeinput:true,
              nameval:false,
              storeval:false,
               phoneval:false,
                stateval:false,
                 districtval:false,
                  noofstoresval:false,
                  validated:false
    };
  }

componentDidMount(){
 
}

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  onSubmit = (name, store, phone, state, district, noofstores) => {
    if(store=="")
    this.setState({storeval:true})
    if(phone=="")
    this.setState({phoneval:true})
    if(state=="")
    this.setState({stateval:true})
    if(district=="")
    this.setState({districtval:true})
    if(noofstores=="")
    this.setState({noofstoresval:true})
    if(name=="")
    this.setState({nameval:true})
    if(!name=="" && !noofstores=="" && !district=="" && !state=="" && !phone=="" && !store == "")
    {
    this.setState({loading:true})
    var datetime = new Date();
    axios.post('/mail', {
        name, store, phone, state, district, noofstores, datetime
    })
    .then(
      () => {
      window.location.href="/confirm"
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}

  onChangeName = (e) => {this.setState({name: e.target.value}) , e.target.value==""?this.setState({nameval:true}):this.setState({nameval:false})}
  onChangeStore = (e) =>{ this.setState({store: e.target.value}) , e.target.value==""?this.setState({storeval:true}):this.setState({storeval:false})}
  onChangePhone = (e) => {this.setState({phone: e.target.value}) , e.target.value==""?this.setState({phoneval:true}):this.setState({phoneval:false})}
  onChangeState = (e) => {this.setState({state: e.target.value}) , e.target.value==""?this.setState({stateval:true}):this.setState({stateval:false})}
  onChangeDistrict = (e) => {this.setState({district: e.target.value}) , e.target.value==""?this.setState({districtval:true}):this.setState({districtval:false})}
  onChangeNoofstores = (e) => {this.setState({noofstores: e.target.value}) , e.target.value==""?this.setState({noofstoresval:true}):this.setState({noofstoresval:false})}
  enableTagsInput =(e) => {this.setState({taginput: false}) , this.setState({state:''}) }
  enablePlacesInput =(e) => {this.setState({placeinput: false}) , this.setState({place:''}) }
  render() {
 
    const { name, store, phone, state, district, noofstores } = this.state
    const buttonstyle = {
        padding:'15px 10px',
         border: this.state.noofstoresval?'solid 2px red':'solid 2px darkgrey',
         borderRadius:'10px',
         background:this.value == this.state.noofstores?'cadetblue':'#fff',
         color:'darkgrey',
        margin:'1vw',
        width:'20vw'
    }
    return (
      <Container style={{padding: '30px 0px ',background:"white", color:"black",fontFamily:"Roboto"}}>
     <b> <h5 style={{fontFamily:'Montserrat', width:'100%', textAlign:'center'}}>Book Your free trial now</h5></b>
      <Form style={{fontFamily:'Sen ', background:'aliceblue', padding:'2px 20px', color:'#7d858c', fontSize:'10px'}}>
        <FormGroup>
          <Label for="exampleEmail">Your name</Label>
          <Input autofocus={true} invalid={this.state.nameval} placeholder='Name' value={this.state.name} onChange={this.onChangeName} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Store Name</Label>
          <Input invalid={this.state.storeval} placeholder='Ex: My Store' value={this.state.store} onChange={this.onChangeStore} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Phone No</Label>
          <Input invalid={this.state.phoneval} type="tel" placeholder=' 8978654321' value={this.state.phone} onChange={this.onChangePhone} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">State</Label>
        <div className="" style={{display:"flex"}}> 
         
         <UncontrolledButtonDropdown direction="down" onChange={this.onChangeState}>
      <DropdownToggle  onChange={this.onChangeState}>
       Select State ▼
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem onClick={this.onChangeState} value="Karnataka" >Karnataka</DropdownItem>
        <DropdownItem divider />
        <DropdownItem style= {{background:'dodgerblue', border:'Solid 10px white', color: 'white'}} onClick = {this.enableTagsInput}>Other</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  
   <Input type={this.state.taginput && this.state.state==""?"hidden":"text"}invalid={this.state.stateval}  disabled={this.state.taginput} style={{background:this.state.taginput?"aliceblue":"white", border:this.state.taginput?"none":"solid", }} autoFocus={true} ref={(input) => { this.nameInput = input; }} placeholder='Type your state' value={this.state.state} onChange={this.onChangeState} />
</div>
  </FormGroup>

  
  <FormGroup>
          <Label for="exampleEmail">District</Label>
        <div className="" style={{display:"flex"}}> 
         
         <UncontrolledButtonDropdown direction="down" onChange={this.onChangeDistrict}>
      <DropdownToggle  onChange={this.onChangeDistrict}>
        Select District  ▼
       </DropdownToggle>
      <DropdownMenu>
   {this.state.state==  "Karnataka" &&<div> <DropdownItem onClick={this.onChangeDistrict} value="Mangalore" >Manglaore</DropdownItem>
      <DropdownItem onClick={this.onChangeDistrict} value="Bangalore" >Banglaore</DropdownItem>
      <DropdownItem onClick={this.onChangeDistrict} value="Hubli" >Hubli</DropdownItem>
      <DropdownItem onClick={this.onChangeDistrict} value="Mysore" >Mysore</DropdownItem>
      <DropdownItem onClick={this.onChangeDistrict} value="Udupi" >Udupi</DropdownItem>
   </div>}
        <DropdownItem divider />
        <DropdownItem style= {{background:'dodgerblue', border:'Solid 10px white', color: 'white'}} onClick = {this.enablePlacesInput}>Other</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  
   <Input type={this.state.placeinput && this.state.district==""?"hidden":"text"} invalid={this.state.districtval}  disabled={this.state.placeinput} style={{background:this.state.placeinput?"aliceblue":"white", border:this.state.placeinput?"none":"solid", }} autoFocus={true} ref={(input) => { this.nameInput = input; }} placeholder='Type your dstrict' value={this.state.district} onChange={this.onChangeDistrict} />
</div>
  </FormGroup>
     
                
        <FormGroup>
        <Label for="exampleEmail">Number of stores</Label>
        <br/><FormGroup size="md">
      <Button style={buttonstyle} onClick={this.onChangeNoofstores} value="1">1</Button>
      <Button style={buttonstyle} onClick={this.onChangeNoofstores} value="2-5">2 - 5</Button>
      <Button style={buttonstyle} onClick={this.onChangeNoofstores} value="6- 10">6- 10</Button>
      <Button style={buttonstyle} onClick={this.onChangeNoofstores} value="10+">10+</Button>
    </FormGroup> 
    </FormGroup>   
      
      <Button size="lg" style={{left: '18vw' ,width:'80vw', position: 'relative',background:'#d22023', color:'#FFF',borderRadius:'40px', padding:'5px',margin:'50px 5px 30px 5px', border:'none', width:'52vw'}} 
      onClick={()=>this.onSubmit(
        name, store, phone, state, district, noofstores
        )}>  {this.state.loading?<i className="fa fa-spinner fa-spin" style={{fontSize:'24px'}}></i>:'Submit'} </Button>
        </Form>
      </Container>
    );
  }
}

export default AdminFormAddItem;