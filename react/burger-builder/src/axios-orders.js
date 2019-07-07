import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-a5a66.firebaseio.com/"
});

export default instance;
