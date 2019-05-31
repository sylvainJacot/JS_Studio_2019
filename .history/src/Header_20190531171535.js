import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const 

class Header extends React.Component {
    render() {
      return (
        <Title>Hello, {this.props.name}</Title>
      );
    }
  }
  
Header.propTypes = {
    name: PropTypes.string
  };

  Header.defaultProps = {
    name: 'Stranger'
  };

  export default Header;



