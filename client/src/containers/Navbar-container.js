import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser
} from "react-device-detect";
import {
  isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { oneKeywordForFilter, resetKeywords} from '../actions/DataFetchingActions';
import { selectorTotalItemsCart } from '../selectors/selector_list_statistics';
import CheckoutMiniSummaryPreview from '../components/Checkout-mini-summary-preview'; 
import Submenu from '../components/Submenu';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Badge
} from 'reactstrap';

const styles = {
  itemMenu: {
    margin:'20px 10px',
    padding: '2px 2px',
    textAlign:'left',
    listStyleType: 'none',
    color:'#000!important',
    fontSize:'20',
    fontFamily:'Montserrat'
  },
  itemnav: {
    padding: '0px',
    width:'30%',
    textAlign:'left',
    listStyleType: 'none',
    color:'#000!important',
    fontSize:'20',
    fontFamily:'Montserrat'
  },
  arrowDown: {
    display: 'none',
  },
  navbarBackground: {
    height:isMobile?'':'67px',
    textAlign:'left',
    justifyContent: isMobile?'':'left',
    backgroundColor: '#fff',
    borderBottom:'solid 3px #376db5',
    boxShadow:'0px 3px 0px #a7af40',
    zIndex: 1,
    textDecoration:'none'
  },
  textBanner: {
    display:'block',
    backgroundImage:'',
    fontFamily: 'sen',
    width:'100px',
    backgroundSize: 'cover'
  },
  textNone:{
    display:'block',    
    fontSize:'10',
    fontFamily:'Montserrat',
    fontWeight:'1000',
    padding:'0px 0px',
    color:'#000',
    backgroundSize: 'cover'
  },
}

const arrowStyleSubmenu = (subMenuCategorySelected, gender, arrowDown) => subMenuCategorySelected === gender && <div style={arrowDown}></div>

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      subMenuOpen: false,
      subMenuCategorySelected: '',
      openCartPreview: false,
      navitems : [],
    };
  }
  componentDidMount() {
    // fetch('/api/category')
    //   .then(response => {        
    //     return response.json();
    //   })
    //   .then((data) => {        
    //     this.setState({
    //       navitems: data.map(item=>({
    //         catname: item.catname,   
    //         catid :item._id,   
    //         image: item.images[0],
    //         subcats: item.subcats,
    //       }))
    //     });
    //   });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubMenuEnter = (x) => {
    this.setState({
      subMenuOpen: true,
      subMenuCategorySelected: x
    })
  }

  handleSubMenuExit = () => {
    this.setState({
      subMenuOpen: false,
      subMenuCategorySelected: ""
    })
  }

  

  render() {
    const { sendOneKeyword, getCart, resetKeywords, totalItemsSelectorStats } = this.props
    const { isOpen, subMenuCategorySelected, subMenuOpen, openCartPreview } = this.state
    const { men, women, children, partyWear, casuals, vastram_specials, } = this.props.categoriesProducts
    const { itemMenu, itemnav, arrowDown, navbarBackground } = styles
    const {navitems} = this.state
    const x = {catid:"x", catname:"services"}
    const categoriesNavItems = gender =>
    isBrowser ?            
      (<NavItem style={itemMenu} onMouseEnter={()=>this.handleSubMenuEnter(gender)} >
        <NavLink to={`/category/${gender.catid}`} className="text-black" onClick={()=>resetKeywords()}>{gender.catname}</NavLink> {arrowStyleSubmenu(subMenuCategorySelected, gender, arrowDown)}
      </NavItem>) :
      (<NavItem style={itemMenu}>
      <NavLink to={`/category/${gender.catid}`} style={{color:"#000", fontSize:'20'}} onClick={()=>{return (resetKeywords(), this.toggle())}}>{gender.catname}</NavLink>
    </NavItem>)

    const cartNavItem = 
    isBrowser ?  
      (<Nav className="ml-auto" navbar style={{cursor: 'pointer'}}>
      <NavItem className="fa fa-shopping-basket" style={itemMenu}>
        <div className="fa fa-shopping-basket" style={itemMenu} 
        onClick={()=>this.setState(totalItemsSelectorStats==0?{ openCartPreview: openCartPreview }:{ openCartPreview:!openCartPreview })}
         >
          <Badge color="danger" pill style = {totalItemsSelectorStats==0?{display: 'none'}:{display: 'block'}}>
            {totalItemsSelectorStats}
          </Badge>
        </div>
      </NavItem>
      {
        openCartPreview && <div style={{position: 'fixed', width:'200px', right:'0', top: '6.3%'}}>
        <CheckoutMiniSummaryPreview empty={getCart.length === 0 && true} getCart={getCart}/>
      </div>
      }
    </Nav>) : <NavItem style={itemMenu}><NavLink to='/cart'  onClick={this.toggle}>cart</NavLink></NavItem>

    const subMenuHoverBrowser = 
      subMenuOpen && isBrowser && 
        <Submenu 
          gender={subMenuCategorySelected} 
          itemsListByGender={subMenuCategorySelected === 'men' ? men : women} 
          sendOneKeyword={sendOneKeyword} 
          handleSubMenuExit={this.handleSubMenuExit}
        />


    return (
      <div className="sticky-top">
        <Navbar light expand="md" style={navbarBackground}>
          <Link to="/" style={itemnav} className="text-white">
            <div style={isMobile?styles.textNone:styles.textBanner}>      
            <img  style={{width:'100%'}} src="/images/tc.jpeg"></img>
      </div></Link>
           <NavbarToggler style={{outline:'none', border:'none', color:'#000'}}  onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar style={{fontSize: '24px', paddingBottom:'20px'}} >
          
          {categoriesNavItems(x)}
            
            {cartNavItem}
          </Collapse>
        </Navbar>
        {/* {subMenuHoverBrowser} */}
      </div>
    );
  }
};


const mapStateToProps = state => ({
  categoriesProducts: state.categoriesProducts,
  getCart: state.cartReducer,
  totalItemsSelectorStats: selectorTotalItemsCart(state)
});

const mapDispatchToProps = dispatch => ({
  sendOneKeyword: x => dispatch(oneKeywordForFilter(x)),
  resetKeywords: () => dispatch(resetKeywords())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
