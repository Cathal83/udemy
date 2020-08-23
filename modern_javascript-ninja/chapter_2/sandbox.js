// alert("hello file world");

// JavaScript runs from top to bottom
console.log(1);
console.log(2);

/**
 *
 * Variables
 *
 */

// define with let
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

// Cannot redefine a const
const points = 100;
// points = 50;
console.log(points);

// old way to define variables
var score = 75;
console.log(score);

/**
 *
 * Data Types
 *
 */

// Strings
console.log("Hello I am a string");

let email = "test@test.com";
console.log(email);

// String concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

let index = email.indexOf("@");

/**
 *
 * Common String methods
 *
 */
let emailNew = "mario@thenetninja.co.uk";
// Find position of last character supplied to function
let resultNew = emailNew.lastIndexOf("n");
// Return part of a string (position from, position to)
resultNew = emailNew.slice(0, 10);
// Return part of a string (position from, count)
resultNew = emailNew.substr(4, 10);
// Replace character (old, new)
resultNew = emailNew.replace("m", "w");
// Only replaces first instance of letter
result = emailNew.replace("n", "w");

/**
 *
 * Numbers
 *
 */
let radius = 10;
const pi = 3.14;

// Math operators +, -, *, /, ** (power of), % (remainder)
result = radius % 3;
result = pi * radius ** 2;

// oreder of operation - B I D M A S
result = 5 * (10 - 3) ** 2;

let likes = 10;
likes++;

// NaN - Not a Number
console.log(5 / "hello");

result = "the blog has " + likes + " likes";

/**
 *
 * Template Strings
 *
 */

const title = "Best reads of 2019";
const author = "Nario";
const favs = 30;

// concatenations way
result =
  "The blog called " + title + " by " + author + " has " + favs + " likes";

// template string
result = `The blog called ${title} by ${author} has ${favs} likes`;

// html template
let html = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>${favs} likes</span>
`;

/**
 *
 * arrays
 *
 */

let ninjas = ["shaun", "ryu", "yoshi"];
// Override array value
ninjas[1] = "ken";

// Different data types
let ages = [20, 25, 30, 35];
let random = ["shaun", "ryu", 20, 30];

// Array methods
result = ninjas.join(",");
result = ninjas.indexOf("yoshi");
result = ninjas.concat(["ken", "crystal"]);
result = ninjas.push("push");
result = ninjas.pop();

/**
 *
 * Null and Undefined
 *
 */

let number;
number = null;

console.log(number, number + 3, `The number is ${number}`);

/**
 *
 * Booleans and comparisons
 *
 */

console.log(true, false, "true", "false");

// methods can return booleans
email = "test@test.com";
result = email.includes("@");

let names = ["shaun", "ryu", "yoshi"];
result = names.includes("ryu");

age = 25;
console.log(age == 30);

name = "shaun";
console.log(name == "shaun");
console.log(name == "Shaun");
console.log(name > "crystal");
// Small s greater than any uppercase letter
console.log(name > "Crystal");

/**
 *
 * Loose versus Strict Comparison
 *
 */

age = 25;
// loose comparison
/* 
console.log(age == 25);
console.log(age == "25");

console.log(age != 25);
console.log(age != "25");
*/
// Strict comparsion

console.log(age === 25); // true
console.log(age === "25"); // false
console.log(age !== 25); // false
console.log(age !== "25"); // true

/**
 *
 * Type Conversion
 *
 */

score = "100";

score = Number(score);

console.log(score);
