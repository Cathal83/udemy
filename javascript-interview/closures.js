/**
 * Question 5 - What is a closure?
 * Answer - an inner function that has access to the scope of an enclosing function
 * Can access: Variables in own scope, variables in scope of outer function, access to global scope
 */

const globalVariable = "global var";

function outterFunc(param1) {
  const variable1 = "var one";

  function innerFunc(param2) {
    const variable2 = "var 2";

    console.log("globalVariable", globalVariable);
    console.log("variable1: ", variable1);
    console.log("variable2: ", variable2);
    console.log("param1: ", param1);
    console.log("param2: ", param2);
  }
  innerFunc("param one");
}

outterFunc("param two");

// Similar to IIFEs, Closures protect variables from being on the global scope
