import { createReducer, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const food = createSlice({
  name: "food",
  initialState: { list: [] },
  reducers: {
    addFood(state, action) {
      if (state.list.length < 10) {
        state.list.unshift(action.payload);
      } else {
        alert("10개 다 고르셨습니다!");
        return;
      }
    },
    deleteFood(state, action) {
      if (action.payload.name) {
        state.list.shift(action.payload);
      }
    },
  },
});

export const { addFood, deleteFood } = food.actions;
export default food.reducer;
