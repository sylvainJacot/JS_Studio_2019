import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./colors";
import logo from "../images/Logo-blue.svg"

// Stylesheet

const HeaderContainer = styled.div`
  background-color: ${color.white};
  width: 160px;
  height: 100vh;
`;

const LogoContainter = styled.a`
  color: red;


`;
const LogoItem =styled.img``;

const MenuContainer = styled.ul``;
const MenuItem = styled.li``;
const MenuLink = styled.a``;

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
        <h1><LogoContainter><LogoItem src={logo}></LogoItem></LogoContainter></h1>
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
