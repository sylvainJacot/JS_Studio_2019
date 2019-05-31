import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
import Header from "he"


function App() {
  return (
    <div className="App">
<Header name="testnom"/>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

export default App;



import PropTypes from 'prop-types';

