/**
 * Question 13 - Function that keeps track of how many times it was called. Functionality insude function
 *
 */

function myFunc() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

// This uses closure. Counter defined at start of function
// Return an anonymous function which is the closure

console.log("instanceOne: ", instanceOne());
console.log("instanceOne: ", instanceOne());
console.log("instanceOne: ", instanceOne());
console.log("instanceTwo: ", instanceTwo());
console.log("instanceTwo: ", instanceTwo());
console.log("instanceOne: ", instanceOne());
