import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVbVBrjNF7aWa_NRXJKrTMYwBY7kqtG3s",
  authDomain: "react-slack-clone-5a122.firebaseapp.com",
  databaseURL: "https://react-slack-clone-5a122.firebaseio.com",
  projectId: "react-slack-clone-5a122",
  storageBucket: "react-slack-clone-5a122.appspot.com",
  messagingSenderId: "1044429272549",
  appId: "1:1044429272549:web:f806d77813e71da1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
