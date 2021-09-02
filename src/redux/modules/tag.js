import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 태그목록 불러오기
export const getTagThunk = createAsyncThunk("tag/getTag", async (type) => {
  const response = await instance.get(`/api/tags?type=${type}`);
  return response.data;
});

const initialState = {
  list: [],
};

// createSlice는 태그목록 함수의 액션 실행
const categorySlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  // 외부 action 및 비동기 action
  extraReducers: (builder) => {
    // 성공
    builder.addCase(getTagThunk.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    // 실패
    builder.addCase(getTagThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const getTags = (state) => state.tag.list;

export default categorySlice.reducer;
