/**
 * Question 9 - difference between == (equals) and === (strict equals)
 * Answer: == compares values (abstract equality), === compares values and type (strict equality)
 */

console.log(7 == "7"); // return true because both converted to same type and then compared  by the ==
console.log(7 === "7"); // returns false because it also checks for data type
