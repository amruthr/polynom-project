import PropTypes from "prop-types";
import React, { Component } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import Breadcrumbs from "./Breadcrumbs";
import { Col, Row, Container } from "reactstrap";
import StarRatings from "react-star-ratings";
import ButtonSizeSelect from "./Button-size-select";
import ButtonAddToCart from "./Button-add-to-cart";
import CheckoutModal from "./Checkout-modal";
import ButtonsColorSelect from "./Buttons-color-select";
import CarouselItemPage from "./Carousel-item";

const propTypes = {
  infoItem: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  selectedSize: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  errorFetching: PropTypes.bool,
  handleSizeSelection: PropTypes.func.isRequired,
  handleColorSelection: PropTypes.func.isRequired,
  totalItemsSelectorStats: PropTypes.number.isRequired
};

const styles = {
  marginTop: "20px"
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      openModal: false
    };
  }

  toggleModal = () => this.setState({ openModal: !this.state.openModal });

  render() {
    const {
      infoItem,
      loading,
      errorFetching,
      addToCart,
      handleSizeSelection,
      handleColorSelection,
      validateSizeSelection,
      validateColorSelection,
      selectedSize,
      selectedColor,
      totalItemsSelectorStats,
      colorSelectionMissingRemark,
      sizeSelectionMissingRemark
    } = this.props;

    const { selectedImage } = this.state;

    if (errorFetching) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    const { title ,tags , price , images, includes, highlights  } = infoItem;
    console.log(infoItem)
    if (
      loading ||
      images === undefined ||
      tags === undefined
    ) {
      return <div style={{ height: "1000px", textAlign:'center' }} >Loading</div>;
    }
    const thumbnailsBrowersView = infoItem.images.map((x, index) => (
      <div key={x} style={{ padding: "5px" }}>
        <img
          onMouseEnter={() => this.setState({ selectedImage: index })}
          src={infoItem.images[index]}
          alt="Smiley face"
          width="50px"
          height="70px"
          style={{cursor: 'pointer'}}
        />
      </div>
    ));
    const MainImageBrowserView = (
      <img
        src={infoItem.images[selectedImage]}
        alt="Smiley face"
        width="100%"
      />
    );
    const MainImageMobileView = (

      <CarouselItemPage imgsArray={infoItem.images} />
    );

    return (
      <div style={{height:'100vh'}}>
        
        <Container style={{paddingTop:'0px', paddingBottom:'30px'}}>
          <Row  style={{height:'100vh'}}>
            <Col md="1">{isBrowser && thumbnailsBrowersView}</Col>
            <Col md="6" style={{padding:isMobile?"0px":"auto", position:'fixed',top:'0px',height:'100vh'}}>
              {isBrowser ? MainImageBrowserView : MainImageMobileView}
            </Col>
            
            <Col md="5" style={{top:'40vh',borderRadius:'20px 20px 0px 0px', background:'aliceblue'}}>
            <Breadcrumbs
          selectedCategory={infoItem.tags}
          backgroundColor={"aliceblue"}
          textColor={"black"}
        />
              <h1 style={{fontFamily:'Montserrat'}}>{infoItem.title}</h1>
              <div>{infoItem.price} </div>
              <StarRatings
                rating={infoItem.rating}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#072a48"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
              />
              <p>Highlights</p><ul>
              {highlights.map((item)=><li>{item}</li>)}
              </ul>
              <p>This Package includes</p><ul>
              {includes.map((item)=><li>{item}</li>)}
              </ul>
              <div style={styles}>
                <ButtonAddToCart
                  sizeBtn="lg"
                  addToCart={addToCart}
                  infoItem={infoItem}
                  toggleModal={this.toggleModal}
                />
              </div>
              <CheckoutModal
                openModal={this.state.openModal}
                toggleModal={this.toggleModal}
                infoItem={infoItem}
                totalItemsSelectorStats={totalItemsSelectorStats}
              />
              <p style={{ paddingTop: "30px" }}>Description:</p>
              <p>{infoItem.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Item.propTypes = propTypes;

export default Item;
