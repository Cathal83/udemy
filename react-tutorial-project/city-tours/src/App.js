import React, { Component } from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
