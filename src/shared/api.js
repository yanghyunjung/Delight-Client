import axios from "axios";
import { result } from "lodash";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export const getFoodList = () => instance.get(`api/foods`).then((res) => res);

export default instance;
