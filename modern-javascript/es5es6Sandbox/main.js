/**
 * this keyword and constructor
 *
 */

// Person constructor

function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  //   console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person("Brad", 23);
// const john = new Person("John", 30);

const brad = new Person("Brad", "9-10-1981");
console.log(brad.calculateAge());

/**
 * Constructors
 */

// String
const name1 = "Jeff";
const name2 = new String("Jeff");

console.log(typeof name2);

// Returns NO because it is an Object, whereas name1 is a String
if (name2 === "Jeff") {
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5); // Object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); // Object

// Function
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1+1");

console.log(getSum1(1, 1));
console.log(getSum2());

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
console.log(re2);

/**
 * Prototypes
 * - Object Prototype
 * - Person Prototype
 */

// Person constructor

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //   this.calculateAge = function() {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}
// calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(mary.getFullName());
mary.getsMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName")); // True
console.log(mary.hasOwnProperty("getFullName")); // False - in prototype

/**
 * Prototype Inheritance
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);
//Mate customer.protoype return Customer()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company`;
};
console.log(customer1.greeting());

/**
 * Using object.create
 */

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 30 }
});

console.log(brad);
console.log(brad.greeting());

/**
 * ES6 Classes
 */

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Do not have to create object to use it
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Smith", "11-13-1980");
console.log(mary.calculateAge());

console.log(Person.addNumbers(1, 2));
