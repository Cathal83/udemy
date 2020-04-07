/**
 * HOISTING
 */

/*
calculateAge(1990);

function calculateAge(year) {
  console.log(2019 - year);
}

// retirement(1990); This throws an error as it is not hoisted

var retirement = function(year) {
  console.log(65 - (2019 - year));
};

// Variables
console.log(age); // This returns undefined as the variable is declared but no value assigned
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/
/**
 * SCOPING
 */

var a = "Hello";
first();

function first() {
  var b = "HI";
  second();

  function second() {
    var c = "Hey";
    console.log(a + b + c);
    third();
  }
}

// This function is in a different scope to the other two functions so cannot access their variables
function third() {
  var d = "John";
  //   console.log(a + b + c + d);
}

/**
 * THIS KEYWORD
 */

//console.log(this); // This returns the window object

/*
calculateAge(1989);
function calculateAge(year) {
  console.log(2019 - year);
  console.log(this);
}
*/
var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
    console.log(this);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1986
};

// Borrowing function
mike.calculateAge = john.calculateAge;
mike.calculateAge();
