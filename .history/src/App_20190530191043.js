import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from 'prop-types';


function App() {
  return (
    <div className="App">
<header />>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;



import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};