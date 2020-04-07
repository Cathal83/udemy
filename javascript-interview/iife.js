/**
 * Question 2 -  What is an IIFE and why used?
 * Answer - Immediately Invoked Function Expression - executed right after it is created
 * Why - Preserve a private scope in a function - do not want to override a global variable
 * Can override inside an IIFE but will not override throughout the application
 */

// Traditional function
function doubleNumber(num) {
  return num * 2;
}

doubleNumber(5);

// IIFE - defined and called
(function doubleNumber1(num) {
  return num * 2;
})(10);
