import React from "react";
import styled from "styled-components";

import { Grid } from "../elements";
import MainLogImg from "../image/hamburger.png";

const MyPageDetail = () => {

    return (
        <Container>
            <Grid flex width="100%" height="15%" padding="2rem">
                <Title1>회원님의 <br /> 음식 기록장</Title1>
                <LogOutBtn >logout</LogOutBtn>
            </Grid>


            <Box1>
                <span style={{ margin: "0 0 0 1.5rem" }}>
                    회원님의 지난 주 <br />
                    <span style={{ color: "#FF6B12", fontWeight: "bold" }}>
                        패스트푸드&nbsp;
                            </span>
                            매니아!
                        </span>
                <Img src={MainLogImg} />
            </Box1>


            <Grid flex width="100%" height="15%" padding="2rem">
                <PickBtn>지난 PICK</PickBtn>

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
    display: grid;
    grid-template-columns: 23rem 2fr;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 1.5rem;
    padding: 1rem 0 1rem 0;
    width: 32rem;
    height: 8rem;
    margin: 0 2rem;
    font-size: 2rem;
    line-height: 3rem;
    color: black;
`;

const Img = styled.img`
  width: 7rem;
  height: 7rem;
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