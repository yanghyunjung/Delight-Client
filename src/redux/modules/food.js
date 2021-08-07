import { createReducer, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { foodAPI } from "../../shared/api";

const instance = axios.create({
  baseURL: "https://api.delight99.co.kr",
});

const food = createSlice({
  name: "food",
  initialState: { list: [], foodName: [] },
  reducers: {
    addFood(state, action) {
      if (state.list.length < 10) {
        state.list.unshift(action.payload);
        state.foodName.push(action.payload.name);
      } else {
        alert("10개 다 고르셨습니다!");
        return;
      }
    },
    deleteFood(state, action) {
      state.foodName.splice(state.foodName.indexOf(action.payload.name), 1);
      const idx = action.payload.list.findIndex(function (item) {
        return item.name === action.payload.name;
      });
      if (idx > -1) {
        state.list.splice(idx, 1);
      }
    },
    getFoodName(state, action) {},
  },
});

export const sendSelectFood =
  (foods) =>
  async (dispatch, getState, { history }) => {
    try {
      await instance.post("/api/ml-recommendations", {
        foods,
      });
      console.log("포스트성공");
      history.push("/recommendation/:id");
    } catch (error) {
      console.log(error);
    }
  };

export const { addFood, deleteFood, getFoodName } = food.actions;
export default food.reducer;
