import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {color from './color';

const HeaderContainer = styled.div`
background-color: white;
`;

const Title = styled.h1`
color: red;
`;


class Header extends React.Component {
    render() {
      return (
        <HeaderContainer>
        <Title>Hello, {this.props.name}</Title>
        </HeaderContainer>
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



