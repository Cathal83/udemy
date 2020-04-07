/**
 *  OBJECT - FUNCTION CONSTRUCTOR
 */

/*
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var yoshi = new Person("Yoshi", 1980, "designer");
var mark = new Person("Mark", 1970, "retired");
yoshi.calculateAge();
mark.calculateAge();
console.log(yoshi.lastName);
*/

/**
 * OBJECT.CREATE METHOD
 */

/*
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1989 },
  job: { value: "designer" }
});
*/

/**
 * PRIMITIVES vs OBJECTS
 */

/*
var a = 23;
var b = a;
a = 46;

// The variables hold their own copy of data
console.log(a); // outputs 46
console.log(b); // outputs 23

var obj1 = {
  name: "John",
  age: 26
};
var obj2 = obj1;
obj1.age = 30;

// These both output 30 as they point to same object
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

/**
 * PASSING FUNCTIONS AS ARGUMENTS
 */
/*

var years = [1983, 1965, 1937, 1941, 2008];

function arrayCal(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCal(years, calculateAge);
console.log(ages);

var fullAges = arrayCal(ages, isFullAge);
console.log(fullAges);

var maxHeart = arrayCal(ages, maxHeartRate);
console.log(maxHeart);
*/

/**
 * FUNCTIONS RETURNING FUNCTIONS
 * FIRST CLASS FUNCTIONS
 */

/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX Design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", what subject do you teach?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("Yoshi");
*/

/**
 * IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
 */

/*

// Traditional Way
function game() {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5);
}
game();

// IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5);
})();

// Throws an error because the variable is private
// console.log(score);

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5 - goodLuck);
})(5);
*/

/**
 * CLOSURES
 */
/*
function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// retirement(66)(1980);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX Design is?");
    } else if (job === "teacher") {
      console.log(name + ", what subject do you teach?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("teacher")("john");
*/

/**
 * BIND, CALL, APPLY
 */

 