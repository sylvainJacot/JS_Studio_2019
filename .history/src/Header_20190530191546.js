import React from "react";
import "./App.css";
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  
Header.propTypes = {
    name: PropTypes.string
  };

  

  export default Header;