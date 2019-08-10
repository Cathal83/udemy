import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Desctructure the props
const Person = ({ name, job, img, children }) => {
  //Store temporal literal in variable and pass to src in img
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="Developer" />
      <Person img="22" name="Bob" job="Designer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
          perferendis.
        </p>
      </Person>
      <Person img="56" name="David" job="Manager" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
