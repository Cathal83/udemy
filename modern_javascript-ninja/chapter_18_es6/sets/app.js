// sets
const namesArray = ["ryu", "chun-li", "ryu", "shaun"];
console.log(namesArray);

// set removes duplicates
// const namesSet = new Set(["ryu", "chun-li", "ryu", "shaun"]);
/*const namesSet = new Set(namesArray);
console.log(namesSet);

const uniqueNames = [...namesSet];
*/
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

// set functions / properties
const ages = new Set();
ages.add(20);
ages.add(38).add(90);
ages.add(20);
ages.delete(90);

console.log(ages, ages.size);
console.log(ages.has(38));

// Empty set
ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "Shaun", age: 30 },
  { name: "Yoshi", age: 20 },
  { name: "Mario", age: 35 },
]);

ninjas.forEach((ninja) => {
  console.log(ninja.name, ninja.age);
});
