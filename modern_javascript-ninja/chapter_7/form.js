const form = document.querySelector(".signup-form");
const username_variable = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(username_variable.value);
  //   console.log(form.username.value);

  //Validation
  if (usernamePattern.test(username)) {
    // correct feedback
    feedback.textContent = "That username is valid";
  } else {
    // feedback help info
    feedback.textContent =
      "Username must contain letters only and be between 6 and 10 characters long";
  }
});

// Live feedback
form.username.addEventListener("keyup", (e) => {
  console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});

// RegEx
// const username = "yoshi";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if (result) {
//   console.log("regex test passed");
// } else {
//   console.log("regex test failed");
// }

// -1 if not match. Position number if it does match
// let result = username.search(pattern);
// console.log(result);
