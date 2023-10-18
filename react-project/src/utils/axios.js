import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:81/api",
  /* baseURL: "http://127.0.0.1:3306/api", */
});

export default instance;
