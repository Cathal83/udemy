/**
 * CHAPTER TWO
 */

/**
 * VARIABLES
 */

/*
let age = 25;
let year = 2019;

console.log(age, year);

// can override value of a variable
age = 30;
console.log(age);
// cannot override a const

const points = 100;
console.log(points);
points = 200;
*/

/**
 * STRINGS
 */

/*
console.log("hello, world");

let email = "test@test.com";
console.log(email);

// String concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[6]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

let index = email.indexOf("@");
console.log(index);

// Common string methods

result = email.lastIndexOf("t");
result = email.slice(5, 10);
result = email.substr(0, 5);
result = email.replace("t", "b");
console.log(result);
*/

/**
 * NUMBERS
 */

/*
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);

let result = radius % 3;
result = pi * radius ** 2;

// order of operation - B I D M A S
result = 5 * (10 - 3) ** 2;

let likes = 10;
likes++;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
console.log(likes);

// NaN - not a number
console.log(5 / "hello");
console.log(5 * "hello");

result = "the blog has " + likes + " likes";
console.log(result);
*/

/**
 * TEMPLATE STRINGS
 */

/*
const title = "Best Reads Of 2019";
const author = "Mario";
const likes = 30;

// Concatenation way
let result =
  "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

// Template String
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// Create HTML Templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);

*/

/**
 * ARRAYS
 */

/*
let ninjas = ["shaun", "ryu", "chun-li"];
ninjas[1] = "ken";
console.log(ninjas[1]);

let ages = [20, 25, 30];
console.log(ages);

let random = ["shaun", "crystal", 30, 20];

// Array methods

// Length
let result = ninjas.length;
// join into a string
result = ninjas.join(",");
result = ninjas.indexOf("chun-li");
// join two arrays
result = ninjas.concat(["ken", "crystal"]);
// return number of elements in array
result = ninjas.push("ken");
result = ninjas.pop();

console.log(result);

*/

/**
 * NULL & UNDEFINED
 */
/*
let age;
console.log(age, age + 3, `the age is ${age}`);
age = null;
console.log(age, age + 3, `the age is ${age}`);
*/

/**
 * BOOLEANS & COMPARISONS
 */

/*
console.log(true, false, "true", "false");
// methods can return booleans
let email = "test@test.com";
let names = ["mario", "luigi", "toad"];

let result = email.includes("!");
console.log(result);
result = names.includes("mario");
console.log(result);

let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);

let name = "shaun";
console.log(name == "shaun");
console.log(name == "Shaun");
console.log(name > "crystal");
console.log(name > "Shaun");
*/

/**
 * LOOSE versus STRICT COMPARISON
 */

/*
let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25);
console.log(age == "25");

// Strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");
*/

/**
 * TYPE CONVERSION
 */

/*
let score = "100";
console.log(score + 1);
console.log(typeof score);

let result = Number("hello");
result = String(50);
result = Boolean(100);
result = Boolean(0); // 0 is falsey while any other number is truthy
result = Boolean(""); // Empty string is falsey
console.log(typeof result, result);
*/
