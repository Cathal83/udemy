const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/portraits/men/82.jpg"
  },
  {
    name: "Mark Smith",
    age: 27,
    gender: "male",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/portraits/men/2.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/portraits/men/83.jpg"
  },

  {
    name: "Mary Jones",
    age: 37,
    gender: "female",
    lookingfor: "male",
    location: "New York NY",
    image: "https://randomuser.me/portraits/women/3.jpg"
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class = 'list-group'>
        <li class = 'list-group-item'>Name: ${currentProfile.name}</li>
        <li class = 'list-group-item'>Age: ${currentProfile.age}</li>
        <li class = 'list-group-item'>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}"/>`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
