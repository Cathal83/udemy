import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaHome } from "react-icons/fa";

class App extends Component {
  state = {};
  render() {
    return (
      <h1>
        Tech Store <FaHome />
      </h1>
    );
  }
}

export default App;
