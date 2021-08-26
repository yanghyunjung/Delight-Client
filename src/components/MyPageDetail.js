import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import MainLogImg from "../image/hamburger.png";
import mypage_2 from "../image/mypage_2.png";

import MyPagePickCard from "../components/MyPagePickCard";
import MainCard from "../components/MainCard";

import { useDispatch, useSelector } from "react-redux";
import { getFrequencyThunk, getFrequency } from "../redux/modules/frequent-tag";

import { getHistorySV } from "../shared/api";
import { addHistory, resetData } from "../redux/modules/food";

import { history } from "../redux/configureStore";

const MyPageDetail = () => {
  const dispatch = useDispatch();
  const foods = useSelector(getFrequency);

  React.useEffect(() => {
    dispatch(getFrequencyThunk(0));
  }, []);

  const [historyList, setHistoryList] = useState(null);

  useEffect(() => {
    async function getHistory() {
      const { data } = await getHistorySV();
      setHistoryList(data);
      dispatch(addHistory(data)); //리덕스 저장
    }
    return getHistory();
  }, []);

  return (
    <Container>
      <Grid flex width="100%" height="15%" padding="2rem">
        <Title1>
          회원님의 <br /> 음식 기록장
        </Title1>
        {/* <LogOutBtn>logout</LogOutBtn> */}
      </Grid>

      <MainCard />

      {/* <Box1>
        <span style={{ margin: "0 0 0 1.5rem" }}>
          회원님의 지난 주 <br />
          <span style={{ color: "#FF6B12", fontWeight: "bold" }}>
            패스트푸드&nbsp;
          </span>
          매니아!
        </span>
        <Img src={MainLogImg} />
      </Box1> */}

      <Grid flex width="100%" height="15%" padding="2rem">
        <PickBtn>지난 PICK</PickBtn>
      </Grid>
      {historyList ? (
        historyList.map((item) => {
          return <MyPagePickCard data={item} />;
        })
      ) : (
        // 이 부분은 임의로 넣은거라서 수정하셔도 무방합니다.
        <Box2
          style={{
            fontSize: "1rem",
            lineHeight: "2rem",
          }}
        >
          <Text padding="2rem 0 2rem 2rem" color="#717171" size="1.5rem">
            회원님은 아직 데이터가 없어요!
            <br />
            지금 추천받고 기록해 보세요 :)
          </Text>
          <Button1
            src={mypage_2}
            onClick={() => {
              dispatch(resetData());
              history.push("/recommendation");
            }}
          />
        </Box2>
      )}
    </Container>
  );
};

const Button1 = styled.img`
  margin: 0 0 0 2rem;
  width: 28rem;
  height: 4.8rem;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
  }
`;

const Box2 = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 14.4rem;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 0 2rem;
    /* padding: 1.6rem 2rem; */
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;
const Title1 = styled.h2`
  width: 11.7rem;
  height: 6.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0 15rem 0 0;
  line-height: 3rem;
`;
const LogOutBtn = styled.button`
  width: 4.2rem;
  height: 1.8rem;
  font-size: 1.5rem;
  position: top;
  color: #c9c9c9;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  font-size: 2rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// 통계 추가 시 사용될 버튼
// const StatisticsBtn = styled.button`
//   margin: 0 0 2rem 0;
//   font-size: 2rem;
//   font-weight: bold;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// `;

export default MyPageDetail;
