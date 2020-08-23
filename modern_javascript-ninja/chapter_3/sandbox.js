/**
 * Chapter 3 - Control Flow
 */

// For Loops
for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}
console.log("loop finished");

const names = ["shaun", "mario", "luigi"];
for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div> `;
  console.log(html);
}

// While Loops
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// Do While Loops
i = 2;
do {
  console.log(names[i]);
  i++;
} while (i < names.length);

// If statements
const age = 25;

if (age > 20) {
  console.log("You are over 20 years old");
}

const ninjas = ["shaun", "ryu", "yoshi", "chun-li"];

if (ninjas.length > 3) {
  console.log("that's a lot of ninjas");
}

// If else
const password = "p@sswod";

if (password.length >= 12) {
  console.log("that password is mighty strong");
} else if (password.length >= 8) {
  console.log("that password is long enough");
} else {
  console.log("that password is not long enough");
}

// Logical operators
if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("that password is long enough");
} else {
  console.log("that password is not long enough");
}

// Logical NOT (!)

let user = false;

if (!user) {
  console.log("you must be logged in to continue");
}

// Break and Continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("Your score: ", scores[i]);
  if (scores[i] === 100) {
    console.log("congrats you got top score");
    break;
  }
}

// Switch Statements

const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got a B");
    break;
  case "C":
    console.log("you got a C");
    break;
  case "D":
    console.log("you got a D");
    break;
  default:
    console.log("you failed");
}

/**
 *
 * Variable and Block Scope
 *
 */

let number = 30;
if (true) {
  // block scope (within {}. Remove let and the variable changes globally)
  let number = 40;
  let name = "Shaun";
  console.log("Inside the code block: ", number, name);
  if (true) {
    let number = 50;
    console.log("Inside the 2nd code block: ", number);
  }
}
console.log("Outside the code block: ", number, name);
