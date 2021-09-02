import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 음식 목록 post하기 
export const getTagResultThunk = createAsyncThunk(
  "tag/getTagResult",
  async (tagIds) => {
    const param = {
      tagIds
    }
    const response = await instance.post(`/api/foods/tags`, param);
    return response.data;
  }
);

const initialState = {
  list: [],
};

// createSlice는 음식 목록 함수의 액션을 동작하게 함
const categorySlice = createSlice({
  name: "tagresult",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTagResultThunk.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(getTagResultThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      alert("목록을 불러오고 있습니다");
    });
  },
});

export const getTagResult = (state) => state.tagresult.list;

export default categorySlice.reducer;
