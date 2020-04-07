/**
 * Question 1 - Triple Add
 * Known as currying function - sequence of functions that take in a single or multiple argument
 */

function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

tripleAdd(10)(20)(30); // returns total of all 3 numbers

//Above is curried version of the below:
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

tripleAdd1(11, 22, 33);

// Curried function taking multiple arguments
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}

quadrupleAdd(10)(20)(30, 40);
