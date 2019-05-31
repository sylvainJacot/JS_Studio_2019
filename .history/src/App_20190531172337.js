import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import Header from "./components/";
import styled from 'styled-components';

const Body = styled.div` 
background-color: grey;
margin: 0;
padding: 0;
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


