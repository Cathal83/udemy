import React, { Component } from "react";
import Item from "./ToDoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>TodDo TodoList</h2>
        <Item />
      </section>
    );
  }
}
