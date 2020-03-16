import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes = {
  sendOneKeyword: PropTypes.func.isRequired, 
  gender: PropTypes.string.isRequired, 
  itemsListByGender: PropTypes.array.isRequired, 
  handleSubMenuExit: PropTypes.func.isRequired
}


const styles ={
  subMenu: {
    width: '100%',
    height: 'fit-content',
    backgroundColor:'#000000aa', 
    backdropFilter : 'blur(3px)',   
    top:'0', 
    left:'0', 
    zIndex:'2',
    padding:'15px'
  },
  
  subMenuCategories: {
    paddingTop:'70px'
  },
  subMenuCategoriesUl: {
    listStyleType: 'none',
    display : 'flex',
    flexDirection: "row",
    fontSize: '15px',
    
  },
  subMenuCategory: {
    color: '#ffbf00',
    background : '#000',
    padding : '10px 20px',
    marginRight: '10px',
    borderRadius: '20px',
    
  }
}

const Submenu = ({
  sendOneKeyword, 
  gender, 
  itemsListByGender, 
  handleSubMenuExit
}) => (
  <div style={styles.subMenu} onMouseLeave={handleSubMenuExit}>
    <div style={styles.subMenuCategoriesUl}>
            {
              itemsListByGender.map(x => <div key={x} onClick={()=>sendOneKeyword(x)}>
                <Link to={`/productslist/${gender}`} style={styles.subMenuCategory
            }> {x}</Link></div>)
            }
          </div>
  </div>
);

Submenu.propTypes = propTypes;

export default Submenu;
