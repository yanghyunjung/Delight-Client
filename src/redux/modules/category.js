import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

import Swal from "sweetalert2";

// 카테고리 함수 생성
export const getCategoryThunk = createAsyncThunk(
  "category/getCategory",
  async (categoryId) => {
    const response = await instance.get(`/api/recommendations/${categoryId}`);
    return response.data;
  }
);

const initialState = {
  list: [],
};

// createSlice는 카테고리 함수 액션 실행
const categorySlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    // 성공
    builder.addCase(getCategoryThunk.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    // 실패
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
