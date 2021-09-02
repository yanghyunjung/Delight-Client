import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});
instance.defaults.headers.common["Authorization"] = getCookie("jwt"); // 헤더에 jwt 실어 서버에 보내기

// 사용자 마이픽 기록 가져오기
export const getHistorySV = () =>
  instance.get(`/api/mypicks/histories`).then((res) => res);

// 사용자 마이픽 기반 추천 랭킹 3 가져오기
export const getUserRecommendationSV = () =>
  instance.get(`/api/ml-recommendations/mypicks`).then((res) => res);

// 카테고리별 음식 가져오기
export const getFoodListSV = (categoryId) =>
  instance.get(`/api/foods/${categoryId}`).then((res) => res);

export const getFrequencySV = () =>
  instance.get(`/api/tags/users/frequent-tag`).then((res) => res);

export default instance;
