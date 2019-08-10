import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

function People() {
  const friends = [
    {
      name: "john",
      job: "developer",
      age: "22",
      company: "apple"
    },
    {
      name: "bob",
      job: "designer",
      age: "23",
      company: "facebook"
    },
    {
      name: "suzy",
      job: "artist",
      age: "21",
      company: "google"
    }
  ];

  return (
    <section>
      <Person person={friends[0]}>
        <p>Some info about children props</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = ({ children, person: { name, job, age, company } }) => {
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      {children}
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
