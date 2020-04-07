/**
 * Question 12 - Curry the function
 */

function getProduct(num1, num2) {
  return num1 * num2;
}

// My answer and real answer
function getProduct(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

getProduct(10)(20);

function getTravelTime(distance, speed) {
  return distance / speed;
}

function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

// Creating a constant because that distance never changes
const travelTimeBosNyc = getTravelTime(400);
// Now passing in second argument
console.log(travelTimeBosNyc(80));
