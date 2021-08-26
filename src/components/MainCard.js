import React from "react";
import styled from "styled-components";

import mypage_nodata from "../image/mypage_nodata.png";

const MainCard = (props) => {
  return (
    <Container>
      <GRID>
        <span
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            padding: "0 8rem 0 0",
          }}
        >
          나의 데이터가 궁금하다면?
        </span>
        <span
          style={{
            fontSize: "1.2rem",
            // padding: "1.9rem 0 2rem 0",
            color: "#ACACAC",
          }}
        >
          자세히 보기
        </span>
      </GRID>
      <GRID1>
        <Box>
          <span style={{ margin: "0 0 0 1.5rem" }}>
            회원님의 지난 주 <br />
            데이터가 없어요.
          </span>
          <img src={mypage_nodata} />
        </Box>
      </GRID1>
    </Container>
  );
};

const Container = styled.div`
  width: 35rem;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
`;

const GRID = styled.div`
  margin: 2rem 0 3rem 0;
  justify-content: space-between;
`;

const GRID1 = styled.div`
  display: flex;
  margin: 0 0 3rem 0;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 23rem 2fr;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 1rem 0 1rem 0;
  width: 35rem;
  height: 8rem;
  /* margin: 0 2rem; */
  font-size: 2rem;
  line-height: 3rem;
  color: #717171;
`;

export default MainCard;
