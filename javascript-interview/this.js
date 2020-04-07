/**
 * Question 5 - What is this keyword and how used?
 * Answer - Refers to the object it is directly inside of
 */

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: "Taylor",
  getPriceSquareFoot: function() {
    return house.price / house.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPriceSquareFoot());

// using this
var houseThis = {
  price: 100000,
  squareFeet: 2000,
  owner: "Taylor",
  getPriceSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};

console.log(houseThis.price);
console.log(houseThis.getPriceSquareFoot());
