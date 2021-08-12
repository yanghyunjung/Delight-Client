import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// 카테고리라는 함수 만들기
export const getCategoryThunk = createAsyncThunk(
  "category/getCategory",
  async (categoryId) => {
    const response = await instance.get(`/api/recommendations/${categoryId}`);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  list: [
    {
      categoryId: "1",
      name: "수육백반",
      recommendedCnt: "62",
      imgUrl: "www.image.png",
    },
  ],
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
    });
  },
});

export const getFoods = (state) => state.category.list;
export default categorySlice.reducer;
