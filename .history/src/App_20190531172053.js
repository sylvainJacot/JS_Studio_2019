import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import Header from "./Header";
import styled from 'styled-components';

const body = styled.div` 
background-color= red;
`;

function App() {
  return (
    <div className="App">
      <Body ></Body>
<Header name="Sylvain"/>
    </div></Body>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;


