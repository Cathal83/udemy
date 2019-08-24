import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  handleActiveChange() {
    // this.setState({ activated: !this.state.activated });
    this.setState(prevState => {
      return { activated: !prevState.activated };
    });
  }
  render() {
    const buttonText = this.state.activated
      ? this.props.activeText
      : this.props.inactiveText;
    return <button onClick={this.handleActiveChange}>{buttonText}</button>;
  }
}

class App extends Component {
  render() {
    return <Button activeText="ON" inactiveText="OFF" />;
  }
}

export default App;
