/**
 * Chapter 4 - Functions
 */

// function expression
const speak = function () {
  console.log("good day");
};

greet();
speak();

// function declarations - this gets hoisted to the top
// function expressions cannot be hoisted
function greet() {
  console.log("hello there");
}

// Arguments and Paramaters
const hello = function (name = "ryu", time = "night") {
  console.log(`good ${time} ${name}`);
};

hello("yoshi");

// returning values
const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

// Arrow function
const calcAreaArrow = (radius) => {
  return 3.14 * radius ** 2;
};

const calcAreaArrowSimple = (radius) => 3.14 * radius ** 2;

const greetArrow = () => "hello world";

const billArrow = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(billArrow([10, 15, 30], 0.2));
const answer = calcAreaArrow(6);
console.log(answer);

/**
 *
 * Functions versus methods
 *
 */

// functions
const greeting = () => "hello";
let resultOne = greeting();
console.log(resultOne);

// methods
let name = "yoshi";
let resultTwo = name.toUpperCase();
console.log(resultTwo);

/**
 *
 * For Each methods and callbacks
 *
 */

const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(50);
};

myFunc((value) => {
  console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

const ul = document.querySelector(".people");
let html = ``;

people.forEach(function (person) {
  html += `<li style = "color:purple">${person}</li>`;
});

ul.innerHTML = html;
