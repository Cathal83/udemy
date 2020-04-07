/**
 * CONTROL FLOW
 */

// For Loops
/*
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// While Loops
let i = 0;

while (i < 5) {
  console.log("in loop: ", i);
  i++;
}

i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
*/
// Do While
/*
let i = 5;

do {
  console.log("val of i is ", i);
  i++;
} while (i < 5);
*/

// If Statements
/*
const age = 25;

if (age > 20) {
  console.log("You are over 20 years old");
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
  console.log("That's a lot of ninjas");
}

const password = "pass";
if (password.length >= 8) {
  console.log("That password is long enough");
}
*/

// If Else
/*
const password = "pass";
if (password.length >= 12) {
  console.log("That password is mighty strong");
} else if (password.length >= 8) {
  console.log("That password is long enough");
} else {
  console.log("Password is not long enough");
}
*/

/**
 * LOGICAL OPERATORS
 */

/*
const password = "p@ss";
if (password.length >= 12 && password.includes("@")) {
  console.log("That password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("That password is strong enough");
} else {
  console.log("Password is not long enough");
}
*/

// Logical Not
/*
let user = false;
if (!user) {
  console.log("you must be logged in to continue");
}

console.log(!true);
console.log(!false);
*/

// BREAK and CONTINUE
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  console.log("your score is ", scores[i]);
}
