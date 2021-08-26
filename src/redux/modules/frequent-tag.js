import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api";


export const getFrequencyThunk = createAsyncThunk("frequency/getFrequency", async () => {
    const response = await instance.get("/api/tags/users/frequent-tag");
    return response.data;
});

const initialState = {
    list: [],
};

const frequencySlice = createSlice({
    name: "frequency",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFrequencyThunk.fulfilled, (state, action) => {
            console.log("action.payload : ", action.payload);
            state.list = action.payload;
        });
        builder.addCase(getFrequencyThunk.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    },
});

export const getFrequency = (state) => state.tag.list;

export default frequencySlice.reducer;
