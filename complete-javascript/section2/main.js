console.log("Hello World!!!");

/**
 *
 * VARIABLES
 *
 * DATA TYPES:
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 *
 */

/*
var firstName = "Yoshi";
console.log(firstName);

var lastName = "Ryu"; // String
var age = 28; // Number
var fullAge = true; // Boolean
var job; // Undefined
console.log(fullAge);


/**
 * VARIABLE MUTATION ADN TYPE COERCION
 */

/**

var firstName = "Yoshi";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

age = "twenty-eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/**
 * BASIC OPERATORS
 */

/*

var now, yearJohn, yearMark;
now = 2018;
var ageJohn = 28;
var ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
var x;
console.log(typeof x);
*/

/**
 * OPERATOR PRECEDENCE
 */

/*
var now = 2019;
var yearJohn = 1990;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

// Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6; // 8*4-6 // 32-6 // 26

// More operators
x = x * 2;
x *= 2;

x = x + 1;
x++;
*/

/**
 *  IF / ELSE STATEMENTS
 */

/*
var firstName = "Yoshi";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}
*/

/**
 * BOOLEAN LOGIC
 */

/*
// If ELSE
var firstName = "Yoshi";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man");
}  else {
  console.log(firstName + " is a man");
}


 // TERNARY OPERATOR


var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";


// SWITCH STATEMENTS


var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids how to code");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites");
    break;
  default:
    console.log(firstName + " does something else");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man");
}

*/

/**
 * TRUTHY AND FALSEY
 *
 * FALSEY:
 * - undefined, null, 0, '', NaN
 *
 * TRUTHY:
 * - Not falsey values
 */

/*
var height;
height = 23;
if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("The variable is not defined");
}

// Equality operators
if (height == "23") {
  console.log("The == operator does type coercion");
}
*/

/**
 * FUNCTIONS
 */

/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

const age = calculateAge(1983);
console.log(age);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "Yoshi");
*/

/**
 * FUNCTION STATEMENTS AND EXPRESSIONS
 */

/*

// Function declaration
// function whatDoYouDo(job, firstName){}

// Function Expression - always returns a value
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives an uber in Lisbon";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "Yoshi"));

// Function Statements - just do actions. Do not return a value
// If Else, Switch are examples
*/

/**
 * ARRAYS
 */
/*
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutata Array Data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// different data types
var john = ["John", "Smith", 1998, "teacher", false];
john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf("Smith"));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";
console.log(isDesigner);
*/

/**
 * OBJECTS AND PROPERTIES
 */

/*

// Objects Literal
var yoshi = {
  firstName: "Yoshi",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(yoshi.firstName);
console.log(yoshi["lastName"]);
var x = "birthYear";
console.log(yoshi[x]);

yoshi.job = "designer";
yoshi["isMarried"] = true;
console.log(yoshi);

// New Object syntax
var ryu = new Object();
ryu.firstName = "ryu";
ryu.birthYear = 1987;
ryu["job"] = "developer";
console.log(ryu);

*/

/**
 * OBJECTS AND METHODS
 */
/*
var yoshi = {
  firstName: "Yoshi",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    return 2018 - this.birthYear;
  },
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear;
  }
};

var age = yoshi.calcAge();
yoshi.age = age;
yoshi.age = yoshi.calcAge();
console.log(yoshi);
*/

/**
 * LOOPS AND ITERATORS
 */

// For Loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ["john", "smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// Continue and Break
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
