import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from 'prop-types';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {this.props.name} !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;



import PropTypes from 'prop-types';

