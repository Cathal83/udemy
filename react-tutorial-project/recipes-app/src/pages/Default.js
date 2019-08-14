import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppercase">
          You are in the wrong place
        </h2>
        <Link to="/" className="btn btn-secondary text-uppercase btn-lg mt-3">
          Return Home
        </Link>
      </Header>
    );
  }
}
