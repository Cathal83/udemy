import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const Person = ({ person: { img, name, age, info } }) => {
  return (
    <article>
      <img src={img} alt={name} />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
      <p>info: {info || "default info"}</p>
    </article>
  );
};

// Person.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// };

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  })
};

// Person.defaultProps = {
//   img: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
//   name: "John Doe",
//   age: 34,
//   info: "Default props"
// };

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        name: "Yoshi",
        age: 24
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        name: "Ryu",
        age: 23
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
        name: "Krystal",
        age: 27,
        info: "Lorem ipsum dolor sit amet."
      }
    ]
  };
  render() {
    return (
      <section>
        {this.state.people.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

// <Person
//   key={person.id}
//   person={person}
//   img={person.img}
//   name={person.name}
//   age={person.age}
//   info={person.info}
// />

// class Form extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     people: []
//   };

//   handleChange = event => {
//     // console.log(event.target.value);

//     // if (event.target.name === "firstName") {
//     //   const textValue = event.target.value;
//     //   this.setState({
//     //     firstName: textValue
//     //   });
//     // }

//     this.setState({
//       [event.target.name]: [event.target.value]
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const firstName = this.state.firstName;
//     const lastName = this.state.lastName;
//     if (firstName.length > 0 && lastName.length > 0) {
//       const person = `${firstName} ${lastName} `;
//       this.setState({
//         people: [...this.state.people, person],
//         firstName: "",
//         lastName: ""
//       });
//     }
//   };

//   render() {
//     return (
//       <section>
//         <article>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleChange}
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </article>
//         <article>
//           <h1>People</h1>
//           <div>{this.state.people}</div>
//         </article>
//       </section>
//     );
//   }
// }

//Uncontrolled Inputs

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;
    console.log(nameValue);

    const email = this.email.value;
    console.log(email);

    const text = this.refs.myText;
    text.style.color = "red";
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={orange => (this.email = orange)} />
          <button type="submit">Submit</button>
        </form>
        <p ref="myText">Hello World</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App_old;
