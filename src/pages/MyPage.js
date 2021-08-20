import React from "react";

import MyPageNoData from "../components/MyPageNoData";
import MyPageDetail from "../components/MyPageDetail";


const MyPage = () => {

    return (
        <React.Fragment>
            <MyPageDetail />
            <MyPageNoData />
        </React.Fragment>
    );
};

export default MyPage;
