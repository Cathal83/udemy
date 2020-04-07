/**
 * Question 7 - What is logged out to console?
 *
 *
 */

var myCar = {
  color: "Blue",
  logColor: function() {
    var self = this;
    console.log("In logColor - this.color: " + this.color); // Blue
    console.log("In logColor - this.color: " + self.color); // Blue
    (function() {
      console.log("In IIFE - this.color: " + this.color); // undefined
      console.log("In IIFE - self.color: " + self.color); // Blue
    });
  }
};

myCar.logColor();

// this is undefined in IIFE because:
// variable self set to keyword this. This references the object it is inside of - myCar object

// first this.color the this keyword still references the myCar object, as does self.color
// in IIFE we are in a new scope so this does not apply because it is not a method on the car object
// If color was on global scope then this would reference that
// Self logs out from within IIFE because var self = this stored car object in self
