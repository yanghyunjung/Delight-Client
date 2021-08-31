import axios from "axios";
import { result } from "lodash";
import { getCookie } from "./Cookie";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});
instance.defaults.headers.common["Authorization"] = getCookie("jwt"); // 헤더에 jwt 실어 서버에 보내기

export const getFoodList = () => instance.get(`/api/foods`).then((res) => res);

export const getHistorySV = () =>
  instance.get(`/api/mypicks/histories`).then((res) => res);

export const getUserRecommendationSV = () =>
  instance.get(`/api/ml-recommendations/mypicks`).then((res) => res);

export const getFoodListSV = (categoryId) =>
  instance.get(`/api/foods/${categoryId}`).then((res) => res);

export const getFrequencySV = () =>
  instance.get(`/api/tags/users/frequent-tag`).then((res) => res);

export default instance;
