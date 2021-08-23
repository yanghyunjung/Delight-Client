import { getCookie } from "../../shared/Cookie";

import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        is_jwt: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.is_jwt = true;
            state.jwt = action.payload.jwt;
        },
        logOut: (state, action) => {
            state.is_jwt = false;
        },
    },
});


export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
