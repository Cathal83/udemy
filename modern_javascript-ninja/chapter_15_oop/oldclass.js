// Old style class declaration
function OldUser(username, email) {
  this.username = username;
  this.email = email;

  //   this.login = function () {
  //     console.log(`${this.username} just logged in`);
  //   };
}

const oldUserOne = new OldUser("chunli", "chunli@chunli.com");
console.log(oldUserOne);

OldUser.prototype.login = function () {
  console.log(`${this.username} just prototyped logged in`);
  return this;
};

OldUser.prototype.logout = function () {
  console.log(`${this.username} just prototyped logged out`);
  return this;
};

oldUserOne.login().logout();

function OldAdmin(username, email, title) {
  // Call the OldUser constructor
  OldUser.call(this, username, email);
  this.title = title;
}
// Inherit the OldUser prototype methods
OldAdmin.prototype = Object.create(OldUser.prototype);

const oldAdmin = new OldAdmin("shaun", "shaun@shaun.com");
console.log(oldAdmin);
