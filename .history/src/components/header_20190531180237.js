import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {color} from './colors';

// Stylesheet

const HeaderContainer = styled.div`
background-color: ${color.white};
width: 160px;
height: 100%;
`;

const Title = styled.h1`
color: red;
`;

const MenuContainer = styled.ul``;
const MenuItem = styled.li``;
const MenuLink = styled.a``;

//Mapping /Looping (un loop en javascript)

const tiles = [
  {href="/", title="First"},
  {href="/", title="Second"},
  {href="/" title="Third"},
];

class Header extends React.Component {
    render() {
      return (
        <HeaderContainer>
        <Title>Hello, {this.props.name}</Title>
        <MenuContainer>
          <MenuItem>
            { tiles.map(tile, index) => (
            <MenuLink key={`tile-${index}`} href={tile.href} title={tile.title}>{LinkName}Link</MenuLink> )}
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



