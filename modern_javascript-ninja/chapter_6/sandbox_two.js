/**
 * Parents, Children, Siblings
 */

const article = document.querySelector("article");
// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);
Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

const title = document.querySelector("h2");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
// Return the original HTML Collection
console.log(title.nextElementSibling.parentElement.children);

/**
 * Event basics
 */

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("you clicked me");
});

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.textDecoration = "line-through";
  });
});
