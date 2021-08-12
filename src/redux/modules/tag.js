import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 태그 목록 불러오기
export const getTagThunk = createAsyncThunk("tag/getTag", async () => {
    console.log("목록")
  const response = await instance.get(`/api/tags`);
  console.log(response.data);
  return response.data;
});

const initialState = {
  list: [
    {
        tagId: "3",
        name: "한식",
    },
  ],
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
      alert("태그 목록을 불러오는 중이에요 조금만 기다려주세요 !");
    });
  },
});

export const getTags = (state) => state.tag.list;
export default categorySlice.reducer;