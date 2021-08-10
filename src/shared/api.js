import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
