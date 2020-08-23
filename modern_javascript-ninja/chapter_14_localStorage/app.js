// Store data in local storage
/*
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);
*/

// get data from localStorage
/*
let name = localStorage.getItem("name");
console.log(name);
let age = localStorage.getItem("age");
console.log(age);

localStorage.setItem("name", "yoshi");
name = localStorage.getItem("name");
console.log(name);

localStorage.age = "40";
age = localStorage.getItem("age");
console.log(age);

// delete data
localStorage.removeItem("name");

localStorage.clear();

age = localStorage.getItem("age");
console.log(age);
name = localStorage.getItem("name");
console.log(name);
*/

// Stringify
const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "banana skin", price: 20 },
  { name: "mushroom", price: 5 },
];

console.log(JSON.stringify(products));

localStorage.setItem("products", JSON.stringify(products));

const store = localStorage.getItem("products");

localStorage.clear();
