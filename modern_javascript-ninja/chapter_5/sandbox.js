/**
 * Chapter 5 - Object Literals
 */

// const blogs = [
//   { title: "why mac and cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 10 },
// ];

let user = {
  name: "yoshi",
  age: 30,
  email: "test@test.com",
  location: "berlin",
  blogs: [
    { title: "why mac and cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 10 },
  ],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs: function () {
    console.log("this user has written the following blogs: ");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);
console.log(user.name);
console.log(user["email"]);
user.login();
user.logBlogs();

/**
 * Math Object
 */

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const rand = Math.random();
console.log(rand);

/**
 *
 * Primitives and Reference Types
 *
 */

// Primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score one: ${scoreOne}, Score Two: ${scoreTwo}`);

scoreOne = 100;
console.log(`Score one: ${scoreOne}, Score Two: ${scoreTwo}`);

// Reference values - both point to same thing
const userOne = { name: "Ryu", age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
