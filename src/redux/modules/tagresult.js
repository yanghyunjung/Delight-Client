import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 태그 음식 결과 나오게 하기
export const getTagResultThunk = createAsyncThunk("tag/getTagResult", async (tagId="all") => {
  const response = await instance.get(`/api/foods/tags/${tagId}`);
  console.log(response.data);
  return response.data;
});

const initialState = {
  list: [
    {
      name: "김치볶음밥",
      imgUrl: "www.image.png",
      tags: ["매운", "단백"],
    },
  ],
};

const categorySlice = createSlice({
  name: "tagresult",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTagResultThunk.fulfilled, (state, action) => {
      console.log("action.payload : ", action.payload);
      state.list = action.payload;
    });
    builder.addCase(getTagResultThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      alert("음식 목록을 불러오는 중이에요. 조금만 기다려주세요!");
    });
  },
});

export const getTagResult = (state) => state.tagResult;
export default categorySlice.reducer;
