/**
 * DOM
 */

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(script => console.log(script.getAttribute("src")));
// console.log(val);

/**
 * Single Element Selctors
 */

console.log(document.getElementById("task-title"));
// get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change Styling
// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "#fff";
// document.getElementById("task-title").style.padding = "5px";
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

// Change Content
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span>Task List Span</span>";

// Query Selector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "hello world";

/**
 * Node List - Multiple Elements
 */

//  // getElementsByClassName
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

// // getElementsByTagName
// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// //Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach((li, index) => (li.textContent = `Hello ${index}`));
// console.log(lis);

// querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((li, index) => (li.textContent = `Hello ${index}`));

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(li => (li.style.background = "#ccc"));

console.log(items);

/**
 * Traversing the DOM
 */

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;
val = listItem;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// Node Type codes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Childrem Nodes - gives just html elements and not the 'Text" field
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";
// Children of children
val = list.children[3].children;

// First Child
val = list.firstChild;
// This removes the text nodes
val = list.firstElementChild;

// Last Child
val = list.lastChild;
// This removes the text nodes
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

/**
 * Create Element
 */

// Crreate element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// Create a new link element
const link = document.createElement("a");
// Add class
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class ="fa fa-remove"></li>';
// Append to li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);

/**
 * Remove and replace DOM elements
 */

// Replace element

// Create element
const newHeading = document.createElement("h2");

// Add if
newHeading.id = "task-title";

// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");

// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);

/**
 * Event Listeners
 *
 */

// AddEventListener takes in a callbackfunction
// document.querySelector(".clear-tasks").addEventListener("click", e => {
//   e.preventDefault();
//   console.log("Hello World");
// });

// Taking a named function
document.querySelector(".clear-tasks").addEventListener("click", onCLick);

function onCLick(e) {
  e.preventDefault();
  //   console.log("Click");
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Hello";

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative
  val = e.clientX;
  val = e.clientY;

  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
}

/**
 * Mouse Events
 */

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);
//// Double Click
// clearBtn.addEventListener("dblclick", runEvent);
// Mouse Down
// clearBtn.addEventListener("mousedown", runEvent);
// // Mouse Up
// clearBtn.addEventListener("mouseup", runEvent);
// //MouseEnter
// card.addEventListener("mouseenter", runEvent);
// //MouseLeave
// card.addEventListener("mouseleave", runEvent);
// //MouseOver
// card.addEventListener("mouseover", runEvent);
// //MouseOut
// card.addEventListener("mouseout", runEvent);
// //MouseRemove
// card.addEventListener("mouseremove", runEvent);
//MouseMove
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

/**
 * Keyboard and Input Events
 */

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input
taskInput.value = "";

// Submit
// form.addEventListener("submit", runEvent);

// Key Down
// taskInput.addEventListener("keydown", runEvent);

// Key Up
// taskInput.addEventListener("keydown", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur - click outside of the input field
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Pase
// taskInput.addEventListener("paste", runEvent);

// Input
// taskInput.addEventListener("input", runEvent);

// Change
select.addEventListener("change", runEvent);

function runEvent(e) {
  //   e.preventDefault();
  console.log(`Event Type: ${e.type} `);
  console.log(e.target.value);
  //   console.log(taskInput.value);
  heading.innerText = e.target.value;
}

/**
 * Event Bubbling and Delegation
 */

// Bubbling - Child to Parent

// document
//   .querySelector(".card-title")
//   .addEventListener("click", () => console.log("card title"));

// document
//   .querySelector(".card-content")
//   .addEventListener("click", () => console.log("card content"));

// document
//   .querySelector(".card")
//   .addEventListener("click", () => console.log("card"));

// EVENT DELEGATION - Parent to Child
// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // Classname requires exact match to all classes
  if (target.parentElement.className === "delete-item secondary-content") {
    console.log("delete item");
  }
  // classList can check for just one class name
  if (target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}

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
