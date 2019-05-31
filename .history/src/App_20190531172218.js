import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import Header from "./Header";
import styled from 'styled-components';

const Body = styled.div` 
background-color: grey;
width
`;

function App() {
  return (
    <div className="App">
      <Body>
<Header name="Sylvain"/>
</Body></div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;


