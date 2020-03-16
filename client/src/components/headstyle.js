import PropTypes from 'prop-types';
import React, { Component } from 'react';
const style = {margin:'20px 2px',textDecoration: 'overline',textDecorationStyle: 'double', fontSize: 'x-large', padding:'4px', textAlign:'center', color:'#ffbf00',};

const propTypes = {
    headtext: PropTypes.string.isRequired
}
class Headstyle extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        const {headtext}= this.props;
        return(
       <div> <div style= {{background:'#000', width:'101px'}}/><p style={style}>{headtext}</p></div>
        );
    }

}
Headstyle.propTypes = propTypes;
export default Headstyle;