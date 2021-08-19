import React from "react";
import styled from "styled-components";

import { Grid } from "../elements";

const MyPageDetail = () => {

    return (
        <Container>
            <Grid flex width="100%" height="15%" padding="2rem">
                <Title1>회원님의 <br /> 음식 기록장</Title1>
                <LogOutBtn >logout</LogOutBtn>
            </Grid>

            <Box1>
                <Text1>
                    회원님은 지난 주 <br /><span style={{ color: "#FF6B12" }} >???</span>매니아!
                </Text1>
            </Box1>

            <Grid flex width="100%" height="15%" padding="2rem">
                <PickBtn>지난 PICK</PickBtn>
                <StatisticsBtn>통계</StatisticsBtn>
            </Grid>
        </Container >
    );
};

const Container = styled.div`
    width: 36rem;
    margin: 0 auto;
    flex-direction: column;
    
`;
const Title1 = styled.h2`
    width:11.7rem;
    height:6.6rem;
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0 15rem 0 0;
    line-height: 3rem;
`;
const LogOutBtn = styled.button`
    width:4.2rem;
    height:1.8rem;
    font-size: 1.5rem;
    position: top;
    color: #C9C9C9;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const Text1 = styled.div`
    font-weight: bold;
    font-size: 2rem;
    padding: 2rem 0 0 2rem;
    line-height: 2.5rem;
`;
const Box1 = styled.div`
    margin: 0 auto;
    width: 32rem;
    height: 8.5rem;
    background-color: #f2f2f2;
    border-radius: 1.6rem;
`;

const PickBtn = styled.button`
    margin: 0 7rem 2rem 0;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
const StatisticsBtn = styled.button`
    margin: 0 0 2rem 0;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export default MyPageDetail;