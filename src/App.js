import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import Header from "./components/header";
import styled from 'styled-components';

const Body = styled.div` 
background-color: grey;
margin: 0 16px;
padding: 0;


`;

function App() {
  return (
    <div className="App">
      <Body>
<Header />
  <p>Hello !</p>
</Body></div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;


