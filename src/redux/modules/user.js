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

// 쿠키에서 jwt 를 불러와 해더에 추가해서 보내는 방법
function sendRequestWithJWT() {
    let headers = {}
    if (getCookie('jwt') != null) {
        headers = { 'Authorization': getCookie('jwt') }
    }
    axios.post('http://localhost/restricted', {}, {
        headers: headers
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            // 로그인이 안되어 있다면 401 이 나옵니다.
            // if (error.response.status === 401) {
            // }
        })
}

export const actionCreators = {
    sendRequestWithJWT,
};
export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
