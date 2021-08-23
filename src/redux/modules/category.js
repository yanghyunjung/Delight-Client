import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

import Swal from "sweetalert2";

// 카테고리 함수 만들기
export const getCategoryThunk = createAsyncThunk(
  "category/getCategory",
  async (categoryId) => {
    const response = await instance.get(`/api/recommendations/${categoryId}`);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  list: [],
};

const categorySlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryThunk.fulfilled, (state, action) => {
      console.log("action.payload : ", action.payload);
      state.list = action.payload;
    });
    builder.addCase(getCategoryThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      Swal.fire({
        width: "260",
        height: "110",
        position: "top-center",
        icon: "error",
        title: "랭킹 데이터가 준비중이에요",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  },
});

export const getFoods = (state) => state.category.list;
export default categorySlice.reducer;
