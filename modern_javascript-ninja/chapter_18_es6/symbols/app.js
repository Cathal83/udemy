// Symbols
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo);

// No two symbols are the same
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja["belt"] = "orange";
// This overrides
ninja["belt"] = "black";

// Symbols make object keys unique
ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "shaun";

console.log(ninja);
