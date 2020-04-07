/**
 * Question 10 - What is the output?
 */

var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber();

// Answer: undefined

// var num = 50 defined on global scope;
// function declared with a console.log and another var num declaration
// get undefined because num is hoisted within function and it is undeclared - var is creating a function variable called num
// if we used let inside the function it would have thrown an error
