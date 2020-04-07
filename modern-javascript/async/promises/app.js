const posts = [
  { title: "Post 1", body: "This is Post One" },
  { title: "Post 2", body: "This is Post Two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 3", body: "This is post three" }).then(getPosts);
