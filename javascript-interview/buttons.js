/**
 * Question 3 - Button: What happens when you click button number 5
 * Answer: "This is button six"
 */

function createButtons() {
  for (var i = 1; i < 5; i++) {
    var body = document.getElementsByClassName.ByTagname("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button" + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtons();

// Fix problem:
// Once button five is placed on screen the for loop has run through and i has become 6
// Solve with an IIFE to preserve i
function createButtonsFixed() {
  for (var i = 1; i < 5; i++) {
    var body = document.getElementsByClassName.ByTagname("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button" + i;

    // create iife with i passed in as a variable
    // onClick in the iife. On each pass of the loop i is passed in and stored in num. Num does not change after the loop runs
    // Next pass in the loop is a different instance of an iife
    (function(num) {
      button.onclick = function() {
        // replace i with num
        alert("This is button " + num);
      };
    })(i);
    body.appendChild(button);
  }
}

createButtonsFixed();

// Another solution

function createButtonsFixed1() {
  for (var i = 1; i < 5; i++) {
    var body = document.getElementsByClassName.ByTagname("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button" + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

createButtonsFixed1();

function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert("This is button " + num);
  };
}

//es6
// let solves problem as it is block scope and not function scope like var
function createButtonsFixed2() {
  for (let i = 1; i < 5; i++) {
    var body = document.getElementsByClassName.ByTagname("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button" + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtonsFixed2();
