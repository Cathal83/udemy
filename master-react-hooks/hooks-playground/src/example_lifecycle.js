import React, { useState, Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount - After first render");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate - After each render");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount - About to be removed");
  }

  render() {
    console.log("rendering");
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
        <h1>{count}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ visible: !visible })}>
          Show / Hide the Counter Component
        </button>
        {visible && <Counter />}
      </div>
    );
  }
}

export default App;
