import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";

import Swal from "sweetalert2";

// 태그음식 결과 나오게 하기
export const getTagResultThunk = createAsyncThunk(
  "tag/getTagResult",
  async (tag_ids) => {
    const param = {
      tag_ids
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
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "로딩중",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  },
});

export const getTagResult = (state) => state.tagresult.list;
export default categorySlice.reducer;
