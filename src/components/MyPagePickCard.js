import React from "react";
import styled from "styled-components";

import mypage_nodata from "../image/mypage_nodata.png";

const MyPagePickCard = () => {

    return (
        <React.Fragment>
            <Grid1>
                <Img src={mypage_nodata} />
                <span>삼겹살 <br /> 태그 <br /> 시간</span>
            </Grid1 >
        </React.Fragment >
    );
};

const Grid1 = styled.div`
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 1.5rem;
    padding: 1rem 0 1rem 0;
    width: 32rem;
    height: 8rem;
    margin: 0 2rem;
    font-size: 2rem;
    line-height: 3rem;
    color: #717171;
`;
const Grid2 = styled.div`
    display: inline;
`;

const Text = styled.div`
    
`;

const Tag = styled.div`
    
`;

const Time = styled.div`
    
`;
const Img = styled.img`
    margin: 0 2rem 0 2rem;
`;


export default MyPagePickCard;