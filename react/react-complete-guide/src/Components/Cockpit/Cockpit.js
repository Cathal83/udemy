import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {};
  }, []);
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   //Http Request
  //   const timer = setTimeout(() => {
  //     alert("Saved data to cloud");
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //     console.log("[Cockpit.js] cleanup work in use effect");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  //   return () => {
  //     console.log("[Cockpit.js] cleanup work in second use effect");
  //   };
  // });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      {<button onClick={authContext.login}>Log In</button>}
    </div>
  );
};

export default React.memo(Cockpit);
