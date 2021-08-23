import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 태그음식 결과 나오게 하기
export const getTagResultThunk = createAsyncThunk(
  "tag/getTagResult",
  async (tagIds) => {
    const param = {
      tagIds
    }
    const response = await instance.post(`/api/foods/tags`,param);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  list: null,
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
      alert("목록을 불러오고 있습니다");
    });
  },
});

export const getTagResult = (state) => state.tagresult.list;
export default categorySlice.reducer;
