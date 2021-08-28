import React from "react";
import styled from "styled-components";

import mypage_nodata from "../image/mypage_nodata.png";

const MainCard = (props) => {
  return (
    <DIV>
      <GRID>
        <span
          style={{
            fontSize: "1.8em",
            fontWeight: "bold",
          }}
        >
          나의 데이터가 궁금하다면?
        </span>
        <span
          style={{
            marginTop: "3px",
            fontSize: "1.3em",
            color: "#ACACAC",
          }}
        >
          자세히 보기
        </span>
      </GRID>
      <GRID1>
        <Box>
          <SpanWrap>
            <span>회원님의 지난 주&nbsp;</span>
            <span>데이터가 없어요.</span>
          </SpanWrap>
          <Img srcSet={mypage_nodata} />
        </Box>
      </GRID1>
    </DIV>
  );
};

const DIV = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const GRID = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0 10px 0;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const GRID1 = styled.div`
  display: flex;
  @media ${(props) => props.theme.mobile} {
    width: 95%;
    display: flex;
    margin: auto;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 75% 1fr;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 10px 5px 10px 0;
  width: 100vw;
  height: 8rem;
  margin: 5px 25px;
  font-size: 2rem;
  line-height: 3rem;
  color: #717171;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    grid-template-columns: 75% 1fr;
  }
`;

const SpanWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  @media ${(props) => props.theme.mobile} {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default MainCard;
