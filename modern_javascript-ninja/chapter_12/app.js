/*
console.log(1);
console.log(2);

setTimeout(() => {
  console.log("callback function fired");
}, 2000);
console.log(3);
console.log(4);
*/

// HTTP Requests
const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //   console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        //   console.log("Could not fetch the data");
        reject("error getting resource");
      }
    });
    //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
  });
};

/*
console.log(1);
console.log(2);

getTodos("luigi.json", (err, data) => {
  console.log(data);
  getTodos("mario.json", (err, data) => {
    console.log(data);
    getTodos("yoshi.json", (err, data) => {
      console.log(data);
    });
  });
});
console.log(3);
console.log(4);

// promise
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    // resolve("some data");
    reject("some error");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

getTodos("luigi.json")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos("mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
    return getTodos("yoshi.json");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    console.log("Promise rejected: ", err);
  });

/**
 *
 * Fetch API
 *
 */

fetch("luigi.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

// async and await
const getTodosAsync = async () => {
  const response = await fetch("luigi.json");
  if (response.data !== 200) {
    throw new Error("cannot fetch the error");
  }
  const data = await response.json();

  return data;
};

console.log(1);
console.log(2);
getTodosAsync()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));
console.log(3);
console.log(4);
