/**
 * Question 14 - What is the value of X and Y?
 */

(function() {
  var x = (y = 200);
})();

console.log("y: ", y); // 200
console.log("x: ", x); // undefined

// this is an iife with two variables.
// x is defined within the scope because it uses var and cannot be used outside of iife - not global scope
// y does not use var
// y is defined as 200
