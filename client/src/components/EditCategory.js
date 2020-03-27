import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FiEdit2 } from 'react-icons/fi';
import axios from 'axios';
import ImageUpload from './ImageUpload'

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      catname: this.props.infos.catname,
      images: this.props.infos.images,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/category')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
  }

  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

  onSubmit = (id, catname, images) => {
    axios.post('/api/update/category', {
      id,
      catname,
      images,    
    })
    .then(response => {
      this.setState({ modalEdit: false });
      window.location.reload(true);
      console.log(response);
    })
    .then(() => {
      window.location.reload(true);
    })
    .catch(err => {
      console.log(err);
    });
  }

  onChangeTitle = (e) => this.setState({catname: e.target.value})
  onChangeImages = (e) =>alert(e.target.value)


  render() {
    const { catname, images } = this.state
    const { _id } = this.props.infos

    return (
        
      <div>
        <Button  style={{position:'absolute', top:'10px', right: '10px'}} color="black" size='sm' onClick={this.toggle}><FiEdit2 /></Button>
        <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.infos.catname} - (id: {_id})</ModalHeader>
          <ModalBody>  
            <ListGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={"default: "+this.props.infos.catname} value={catname} onChange={this.onChangeTitle} />
              </InputGroup>                           
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Images</InputGroupText>
                </InputGroupAddon>
                <img src={this.state.images} height='100' width='100'/>
                <ImageUpload  onChangeValue={this.onChangeImages}/>            
              </InputGroup>             
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" 
              onClick={()=>this.onSubmit(
                _id,      
                catname,          
                images
                )}>Confirm the changes?
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default EditCategory;
