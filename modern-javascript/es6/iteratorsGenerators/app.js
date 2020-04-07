// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// Create an array of names
const namesArr = ["Yoshi", "Ryu", "Mario"];
// Init iterator and pass in names array
const names = nameIterator(namesArr);
console.log(names.next().value); // Yoshi
console.log(names.next().value); // Ryu
console.log(names.next().value); // Mario

// Generator
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();
console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
