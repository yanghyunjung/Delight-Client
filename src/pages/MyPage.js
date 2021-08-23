import React from "react";

import MyPageNoData from "../components/MyPageNoData";
import MyPageDetail from "../components/MyPageDetail";


const MyPage = () => {

    return (
        <React.Fragment>

            {/* {히스토리가 있으면 ? () : ()} */}
            <MyPageDetail />
            {/* <MyPageNoData /> */}
        </React.Fragment>
    );
};

export default MyPage;
