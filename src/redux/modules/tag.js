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

const categorySlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTagThunk.fulfilled, (state, action) => {
      console.log("action.payload : ", action.payload);
      state.list = action.payload;
    });
    builder.addCase(getTagThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const getTags = (state) => state.tag.list;

export default categorySlice.reducer;
