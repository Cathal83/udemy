/**
 * Question 6 - What is variable and function hoisting?
 * Answer - Javascript brings variables and functions to top of scope within  which they are decalred
 * Either function scope or global scope
 *
 * Variables and functions hoisted to top of scope they are declared in, depending on key word used to define them
 */

// What we see
//
//
//
//
var color = "blue";

// What JS does:
var color;
//
//
//
//
color = "blue";

// function example
console.log(getProduct); // should return error

var getProduct = function(num1, num2) {
  return num1, num2;
};
// error comes out because var getProduct; hoisted to top of file
// it sets the variable when it reaches it further down
// this is function expression

// function decalaration:
function getProductDeclare(num1, num2) {
  return num1, num2;
}
// Declarations get fully hoisted to top of the file

// Global check - variables only hoisted to top of function if declared inside a function
var globaleVar = "global";

(function() {
  var name = "Jen";
  var getAge = function() {
    return "30";
  };
  function getState() {
    return "Delaware";
  }
})();

// Function Scope and Global Scope only with VAR
// Const and Let do Function, Global, and Block Scope
// Block includes for and if loops
// let and const not initialised until their declaration
