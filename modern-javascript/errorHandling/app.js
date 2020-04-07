const user = { email: "test@test.com" };

try {
  // Produce a reference error
  //   myFunction();
  // Produce a TypeError
  //   null.myFunction();
  // Produce a syntax error
  //   eval("Hello World");
  // Produce a URIError
  //   decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (err) {
  console.log(`User error: ${err.message}`);
  //   console.log(err.message);
  //   console.log(err instanceof Error);
} finally {
  console.log("Finally runs regardless of errors");
}

console.log("Program continues");
