import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  /* baseURL: "http://127.0.0.1:3306/api", */
});

export default instance;
