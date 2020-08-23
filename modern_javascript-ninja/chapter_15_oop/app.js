const userOne = {
  username: "ryu",
  email: "ryu@ryu.com",

  login() {
    console.log("the user logged in");
  },

  logout() {
    console.log("the user logged out");
  },
};

// userOne.login();

class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in`);
    // need to return something so it can be chained
    return this;
  }

  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }

  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score} `);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

// 'new' keyword:
/* 
    1. Creates a new empty object
    2. Binds the value of this to the new object
    3. calls the Constructor function to build the new object
*/
const userTwo = new User("mario", "mario@mario.com");
const userThree = new User("luigi", "luigi@mario.com");
console.log(userTwo.login().incScore().incScore().logout());
const adminOne = new Admin("yoshi", "yoshi@yoshi.com");
console.log(adminOne);
let users = [userTwo, adminOne, userThree];
console.log(users);
adminOne.deleteUser(userTwo);
console.log(users);
