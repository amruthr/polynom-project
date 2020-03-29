import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FiEdit } from 'react-icons/fi';


export default class AdminPromos extends Component {
  constructor(props){
    super(props);
    this.state={
      apiList: [],
      src: '',
      mobilesrc:'',
      caption:'',
      modalEdit: false,

    }
  }
  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });
  async componentDidMount() {
    try {
      const response = await axios.get('/api/carouselData')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
  }
  onChangeSrc = (e) => this.setState({src: e.target.value})
  onChangeMobileSrc = (e) => this.setState({mobilesrc: e.target.value})
  onChangeCaption = (e) => this.setState({caption: e.target.value})

  onSubmit = (src , mobilesrc , caption) => {
    axios.post('/api/carouselData', {
      src,
      mobilesrc,
      caption
    }).then(window.location.href="/dashboard/")
  }
  render() {
    const styles = {
        tabx: {
          cursor: 'pointer',      
          color:'white',
        },
      }
  const { apiList, src, mobilesrc, caption, modalEdit } = this.state
    return (
      <div style={{paddingTop: '50px', paddingBottom:'50px', background:'#fff'}}>
        <h1>Trending and Promotions</h1>
      <Table responsive striped bordered hover size="sm">
        <thead style={styles}>
          <tr>
            <th>#</th>
            <th>landscape image</th>
            <th>mobile image</th>
            <th>caption</th>            
          </tr>
        </thead>
        <tbody>
        {
          apiList.map((x, index)=>
            <tr>
              <th scope="row">{index+1}</th>              
              <td><img src={x.src} style={{width:"100px"}}></img></td>                         
              <td><img src={x.mobilesrc} style={{width:"100px"}}></img></td>
              <td>{x.caption}</td>            
            </tr>
            )
          }
        </tbody>
      </Table>
      <Button className="btn lg primary" onClick={this.toggle}>Add new item</Button>
      <Modal isOpen={modalEdit} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>add new promo</ModalHeader>
          <ModalBody>  
            <ListGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>landscape image URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={"URL..."} value={src} onChange={this.onChangeSrc} />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Mobileimage URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={"URL..."} value={mobilesrc} onChange={this.onChangeMobileSrc} />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Caption</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="An interesting descripton" value={caption} onChange={this.onChangeCaption} />
              </InputGroup>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" 
              onClick={()=>this.onSubmit(
                src, 
                mobilesrc,
                caption
                ) }>Add Item
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    ) 
}
}
