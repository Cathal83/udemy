const scores = [10, 20, 30, 5, 25, 55, 95, 40];

/**
 *
 * Filter
 *
 */

/*
const greater20 = scores.filter((score) => {
  return score > 20;
});

console.log(greater20);
console.log(scores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "ryu", premium: false },
  { name: "mario", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
*/

/**
 * Reduce
 */

/*
const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }

  return acc;
}, 0);

console.log(result);

const players = [
  { name: "mario", score: 33 },
  { name: "shaun", score: 50 },
  { name: "yoshi", score: 40 },
  { name: "ryu", score: 60 },
  { name: "mario", score: 70 },
];

const marioTotal = players.reduce((acc, curr) => {
  if (curr.name === "mario") {
    acc += curr.score;
  }

  return acc;
}, 0);

console.log(marioTotal);
*/

/**
 *
 * Find Method
 *
 */

// Returns first value which passes the condition
const firstHighScore = scores.find((score) => score > 50);

console.log(firstHighScore);

/**
 *
 * Sort Method
 *
 */

const names = ["mario", "luigi", "yoshi", "ryu"];

names.sort();
names.reverse();
console.log(names);

scores.sort();
console.log(scores);

const players = [
  { name: "mario", score: 33 },
  { name: "shaun", score: 50 },
  { name: "yoshi", score: 40 },
  { name: "ryu", score: 60 },
  { name: "mario", score: 70 },
];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

players.sort((a, b) => b.score - a.score);

console.log(players);

/**
 *
 * Chaining Methods
 *
 */

const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "banana skin", price: 20 },
  { name: "mushroom", price: 5 },
];

const filtered = products.filter((product) => product.price > 20);
const promos = filtered.map((product) => {
  return `the ${product.name} is ${product.price} pounds`;
});

console.log(promos);

const promo = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price} pounds`);
console.log(promo);
