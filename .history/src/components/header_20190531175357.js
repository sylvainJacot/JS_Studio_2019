import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {color} from './colors';

const HeaderContainer = styled.div`
background-color: ${color.white};
width: 160px;
height: 100%;
`;

const Title = styled.h1`
color: red;
`;

const MenuContainer = styled.ul``;



class Header extends React.Component {
    render() {
      return (
        <HeaderContainer>
        <Title>Hello, {this.props.name}</Title>
        <MenuContainer>
          <MenuItem>
            <MenuLink></MenuLink>
          </MenuItem>
          </MenuContainer>
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



