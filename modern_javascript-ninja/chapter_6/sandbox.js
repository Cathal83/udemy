/**
 * Chapter 6 - DOM
 */

/**
 * The Query Selector
 */
const para = document.querySelector("body > h1");
console.log(para);

const paras = document.querySelectorAll(".error");

paras.forEach((para) => {
  console.log(para);
});
console.log(paras);

/**
 * Other seletors
 */

// get element by id
const title = document.getElementById("page-title");

//get element by classname
const errors = document.getElementsByClassName("error");
console.log(errors);

// get element by tag name
const tag = document.getElementsByTagName("p");
console.log(tag);

/**
 * Adding and Changing content
 */

const paragraph = document.querySelector("p");
console.log(paragraph.innerText);
paragraph.innerText = "Ninjas are awesome";

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");
// content.innerHTML = "<h2>This is a new h2</h2>";

const people = ["mario", "luigi", "yoshi"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

/**
 * Getting / Setting Attribues
 */

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://yahoo.com");
link.innerText = "Yahoo";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");

mssg.setAttribute("style", "color:green");

/**
 * Changing CSS style
 */

const header = document.querySelector("h1");
console.log(header.style);
header.style.margin = "50px";
header.style.color = "crimson";
header.style.fontSize = "40px";

/**
 * Adding and removing classes
 */

const errorContent = document.querySelector("p");
// console.log(errorContent.classList);
// errorContent.classList.add("error");
// errorContent.classList.remove("error");
// errorContent.classList.add("success");

const pTags = document.querySelectorAll("p");
pTags.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

title.classList.toggle("test");
title.classList.toggle("test");
