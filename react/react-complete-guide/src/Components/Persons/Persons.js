import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Person.js] getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Person.js] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Person.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("[Person.js] componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    console.log("[Person.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
