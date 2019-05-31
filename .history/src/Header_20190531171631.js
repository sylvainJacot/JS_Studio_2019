import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1'
color: red;
;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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



