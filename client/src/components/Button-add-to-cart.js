import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { 
  Button
} from 'reactstrap';

const propTypes = {
  addToCart: PropTypes.func.isRequired,
  sizeBtn: PropTypes.string.isRequired,
  infoItem: PropTypes.object.isRequired,
/*   selectedSize: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired, */
  toggleModal: PropTypes.func.isRequired,
/*   validateSizeSelection: PropTypes.func.isRequired,
  validateColorSelection: PropTypes.func.isRequired,
  colorSelectionMissingRemark: PropTypes.string.isRequired,
  sizeSelectionMissingRemark: PropTypes.string.isRequired */
};

const ButtonAddToCart = ({
  addToCart,
  sizeBtn,
  infoItem,
  selectedSize,
  selectedColor,
  toggleModal,
  validateSizeSelection,
  validateColorSelection,
  colorSelectionMissingRemark,
  sizeSelectionMissingRemark
}) => {
  
 // const colorBtn = (colorSelectionMissingRemark.length > 0 || sizeSelectionMissingRemark.length > 0) ? 'danger' : 'success'

  return (
    <Fragment>
      <Button onClick={()=>{ return(
    addToCart({...infoItem}) && toggleModal()
      )}}>Add to Cart</Button> 
    </Fragment>

);};

ButtonAddToCart.propTypes = propTypes;

export default ButtonAddToCart;

