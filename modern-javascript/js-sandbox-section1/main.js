// var, let, const

// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // CONST
// const name = "John";
// console.log(name);

// Data Types

// // String
// const name = "John Doe";
// console.log(typeof name);

// // Number
// const age = 45;
// console.log(typeof age);

// //Boolean
// const hasKids = true;
// console.log(typeof hasKids);

// //Undefined
// let test;
// console.log(typeof test);

// //Null
// let car = null;
// console.log(typeof car);

// Type Conversion
let val;

// Number to String
val = String(5);
//Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4]);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

/**
 * Numbers
 */

const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3);
val = Math.max(2, 33, 4, 1, 55, 6, 3);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

/**
 * Strings
 */

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,developmemnt,program";

let val;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad";
val += "Traversy";

val = "Hello my name is " + firstName + " and I am " + age;

// Escaping - place \ before '
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[2];

// indexOf
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt
val = firstName.charAt("2");
// Get the last character
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

val = firstName.slice(0, 4);
// Get last three characters
val = firstName.slice(-3);
// Split into an array
val = str.split(" ");
val = tags.split(",");

// replace
val = str.replace("Brad", "Jack");

// Include()
val = str.includes("Hello");

console.log(val);

/**
 * Template Literals
 */

const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

// Without Template Strings - ES5
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

html = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
</ul>`;
document.body.innerHTML = html;

/**
 * Arrays
 */

// Create some arrays
const numbers = [45, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 1);
// Reverse array
numbers.reverse();

// Concat array
val = numbers.concat(numbers2);

val = fruit.sort();
// This sorts by first digit so 2 comes after 19
val = numbers.sort();
// Use compare function to sort numbers
val = numbers.sort((x, y) => x - y);

// find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

// console.log(numbers);

/**
 * Object Literals
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "test@test.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "Florida"
  },
  getBirthYear: function() {
    return new Date().getFullYear() - this.age;
  }
};

let val;

val = person.firstName;
val = person["firstName"];
val = person.hobbies[0];
val = person.getBirthYear();

const people = [{ name: "John", age: 30 }, { name: "Mike", age: 23 }];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

/**
 * Dates & Times
 */

let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);

/**
 * If / Else Statements
 */

let val;

const id = 100;

// EQUAL
if (id == 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// // NOT EQUAL
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// // Test value and type
if (id === "100") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Check type
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log("No ID");
}

// Greater Than or Less Than
if (id > 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// IF ELSE
const color = "red";
if (color === "red") {
  console.log("Color is red");
} else if (color === "yellow") {
  console.log("Color is yellow");
} else {
  console.log("Color is not red or yellow");
}

// Logical operators
const name = "Steve";
const age = 20;

// And &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teen`);
} else {
  console.log(`${name} is an adult`);
}

// Or ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for race`);
}

// Ternary
console.log(id === 100 ? "Correct" : "Incorrect");

/**
 * Switch
 */

const color = "red";

switch (color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  default:
    console.log("No color");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Don't know";
}

console.log(day);

/**
 * Functions
 */

function greet(firstName = "John", lastName = "Doe") {
  //   if (typeof firstName === "undefined") {
  //     firstName = "John";
  //   }
  //   if (typeof lastName === "undefined") {
  //     lastName = "Doe";
  //   }
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());

const square = function(x) {
  return x * x;
};

console.log(square(9));

// IIFE
(function() {
  console.log("IIFE");
})();

const todo = {
  add: function() {
    console.log("Add todo...");
  },

  edit: function(id) {
    console.log(`edit todo ${id}`);
  }
};

todo.add();
todo.edit(123);

/**
 * Loops and Iteration
 */

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favourite number");
    continue;
  }

  if (i === 5) {
    break;
  }
  console.log("Number " + i);
}

// //While Loop
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// // Do While
// let i = 100;
// do {
//   console.log("Number" + i);
//   i++;
// } while (i < 10);

// Loop Through Array
const cars = ["Ford", "Chevy", "Honda", "Toyota"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// For Each Loop
cars.forEach((car, index) => console.log(car, index));
cars.map(car => console.log("Map", car));

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" }
];

// Map - similar to forEach but returns array
const ids = users.map(user => user.id);
console.log(ids);

// For In Loop
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  // This returns the keys
  console.log(x);
  // Get the object through key value pair
  console.log(`${x} : ${user[x]}`);
}

/**
 * Window
 */

// // Confirm
// if (confirm("Are You Sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

// Window Height
val = window.outerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// // Redirect
// window.location.href = "http://google.com";
// // Reload
// window.location.reload();

// History Object
window.history.go(-1);

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;

console.log(val);

/**
 * Scope
 * let and const haev block scope
 * var has function scope
 */

// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope", a, b, c);
// }

// test();

// // This redefines a as 4 on global level
// if (true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope", a, b, c);
// }

// If use var in loop the global a becomes 10
for (let a = 0; a < 10; a++) {
  console.log(`${a}`);
}

console.log("Global Scope", a, b, c);
