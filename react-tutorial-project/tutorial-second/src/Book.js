import React, { Component } from "react";

import Button from "./Button";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log("clicked");
  //   console.log(this.state.count);
  // }

  // handleClick = () => {
  //   console.log("Clicked");
  //   console.log(this.state.count);
  // };

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // lowerCount = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  // resetCount = () => {
  //   this.setState({
  //     count: 0
  //   });
  // };

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    // console.log(this.props);
    // const { handleDelete } = this.props;
    const { id, img, title, author } = this.props.info;

    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            amet.
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} alt={title} width="150px" />
        <div>
          <h4>Book: {title}</h4>
          <h5>Author: {author}</h5>
          <h3>Count: {this.state.count}</h3>
          <button type="button" onClick={this.handleInfo}>
            Toggle Info
          </button>

          {checkInfo(this.state.showInfo)}

          {this.state.showInfo && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis optio ipsam quis inventore. A optio non animi nam
              aspernatur vel?o
            </p>
          )}
          {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              voluptas?
            </p>
          ) : null}
          {/* <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button> */}
        </div>
      </article>
    );
  }
}
