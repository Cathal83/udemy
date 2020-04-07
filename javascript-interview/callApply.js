/**
 * Question 15 - What are call and apply methods
 *
 * Answer:
 */

const car1 = {
  brand: "Porshce",
  getCarDescription: function(cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}. \n`
    );
  }
};

// call()
// Native javasript method on function prototype method - any function can use it
// alternative way to call function
// call allows different way of passing arguments into function or change 'this' context

const car2 = {
  brand: "Lamborghini"
};

car1.getCarDescription(80000, 2010, "blue");

// first argument is the this context
car1.getCarDescription.call(car2, 200000, 2013, "yellow");

// apply()
// Pass all parameters inside an array and not individually like call method

const car3 = {
  brand: "Ford"
};

car1.getCarDescription.apply(car3, [35000, 2012, "black"]);
