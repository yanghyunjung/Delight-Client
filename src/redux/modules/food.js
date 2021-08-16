import { createReducer, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { foodAPI } from "../../shared/api";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});

const food = createSlice({
  name: "food",
  initialState: {
    selectList: [],
    foodName: [],
    result: null,
  },
  reducers: {
    addFood: (state, action) => {
      if (state.selectList.length < 10) {
        state.selectList.unshift(action.payload);
        state.foodName.push(action.payload.name);
      } else {
        alert("10개 다 고르셨습니다!");
        return;
      }
    },
    deleteFood: (state, action) => {
      state.foodName.splice(state.foodName.indexOf(action.payload.name), 1);
      const idx = action.payload.list.findIndex((item) => {
        return item.name === action.payload.name;
      });
      if (idx > -1) {
        state.selectList.splice(idx, 1);
      }
    },
    getResult: (state, action) => {
      state.result = action.payload.data;
    },
  },
});

export const sendSelectFoodSV = ({ selectedFood, setIsLoding }) => {
  return async (dispatch, getState, { history }) => {
    try {
      await instance
        .post("/api/ml-recommendations", { foods: selectedFood })
        .then((res) => {
          const data = res.data.data;
          dispatch(getResult({ data }));
          setTimeout(setIsLoding, 6000, true);
        });
    } catch (error) {
      console.log("post 오류", error);
    }
  };
};

export const { addFood, deleteFood, getResult } = food.actions;
export default food.reducer;
