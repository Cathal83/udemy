/**
 * Local and Session Storage
 */

// Part of the browser - window object and not document object

// Set local storage item
// localStorage.setItem("name", "Yoshi");
// localStorage.removeItem("books");
// localStorage.removeItem("bookmarks");

// // set session storage
// sessionStorage.setItem("name", "Ryu");

// remove from storage
// localStorage.removeItem("name");

// get from stoarge
// const name = localStorage.getItem("name");

clear;
localStorage.clear();

// document.querySelector("form").addEventListener("submit", e => {
//   const task = document.getElementById("task").value;
//   let tasks;

//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   alert("Task saved");
//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem("tasks"));
// tasks.forEach(task => console.log(task));
