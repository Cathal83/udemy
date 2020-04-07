import React, { useState, useEffect, Component, createContext } from "react";

const NameContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Yoshi"
    };
  }
  render() {
    return (
      <NameContext.Provider value={this.state.name}>
        <Child />
      </NameContext.Provider>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <section className="child">
        <Grandchild />
      </section>
    );
  }
}
class Grandchild extends Component {
  render() {
    return (
      <section className="grandchild">
        <Button />
      </section>
    );
  }
}
class Button extends Component {
  render() {
    return (
      <NameContext.Consumer>
        {name => <button>{name}</button>}
      </NameContext.Consumer>
    );
  }
}

export default App;
