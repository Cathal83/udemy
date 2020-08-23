// Rest parameter - bundle parameters into array
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);
result.forEach((num) => {
  console.log(num);
});

// Spread syntax (arrays)
const people = ["shaun", "ryu", "crystal"];
console.log(...people);
const members = ["mario", "chunli", ...people];
console.log(members);

// Spread syntax Objects
const person = { name: "Shaun", age: 30, job: "net ninja" };
const personClone = { ...person, location: "manchester" };

console.log(personClone);
