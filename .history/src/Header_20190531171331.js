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

  Header.defaultProps = {
    name: 'Stranger'
  };

  export default Header;


  import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;
