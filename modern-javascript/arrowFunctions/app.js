const sayHello = function() {
  console.log("Hello");
};
/*
const sayHello = () => {
  console.log("Hello");
};

// ONE LINE FUNCTION - does not need braces
const sayHello = () => console.log("Hello");

// One line return
const sayHello = () => "Hello";

// Return Object
const sayHello = () => ({ msg: "Hello" });

// Single Param
const sayHello = name => console.log(`Hello ${name}`);

// Multiple Params
const sayHello = (fname, lname) => console.log(`Hello ${fname} ${lname}`);
*/
const users = ["Nathan", "John", "Yoshi"];

const nameLengths = users.map(name => name.length);

console.log(nameLengths);
