import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./colors";
import {  devices  }  from "./mediaqueries";
import logo from "../images/Logo-blue.svg"

// Stylesheet

const HeaderContainer = styled.div`
h1 {
  z-index: 1;
  font-size: 0;

}
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${color.white};

@media ${devices.laptop} {

}
`;

const LogoContainter = styled.a`
  display: block;
  width: 48px;
  height: 48px;
  margin: 40px 0px;

`;
const LogoItem =styled.img``;

const MenuContainer = styled.ul`
position: absolute;
width: 80%;
height: 100vh;
background-color: pink;
opacity: 0.7;
margin: 0;
top: 0;
left: 0;
right: 0;
`;


const MenuItem = styled.li`

`;
const MenuLink = styled.a`
`;

const BurgerMenuContainer = styled.button`
width: 40px;
height: 40px;
background-color: red;
cursor: pointer;
`;
//Mapping /Looping (un loop en javascript)

const tiles = [
  { href: "/", title: "First", LinkName: "Link 01" },
  { href: "/", title: "Second", LinkName: "Link 02" },
  { href: "/", title: "Third", LinkName: "Link 03" }
];

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1><LogoContainter href="/"><LogoItem src={logo}></LogoItem></LogoContainter></h1>
        <BurgerMenuContainer></BurgerMenuContainer>
        <MenuContainer>
          {tiles.map((tile, index) => (
            <MenuItem>
              <MenuLink
                key={`tile-${index}`}
                href={tile.href}
                title={tile.title}
              >
                {tile.LinkName}
              </MenuLink>{" "}
            </MenuItem>
          ))}
        </MenuContainer>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: "Stranger"
};

export default Header;
