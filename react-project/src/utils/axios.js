import axios from "axios";

const instance = axios.create({
  baseURL: "`http://mobe.local/api/`",
});

export default instance;
