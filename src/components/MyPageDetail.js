import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MyPagePickCard from "../components/MyPagePickCard";
import MainLogOutCard from "../components/MainLogOutCard";
import MyPageNoData from './MyPageNoData';
import MainLogCard from './MainLogCard';


import { useDispatch, useSelector } from "react-redux";
import { getFrequencyThunk, getFrequency } from "../redux/modules/frequent-tag";

import { getHistorySV } from "../shared/api";
import { addHistory } from "../redux/modules/food";

const MyPageDetail = () => {
  const dispatch = useDispatch();


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
      <Grid1>
        <Title1>
          회원님의 음식 기록장
        </Title1>
        {/* <LogOutBtn>logout</LogOutBtn> */}
      </Grid1>

      <MainLogOutCard />

      {historyList ? (
        historyList.map((item) => {
          return <MyPagePickCard data={item} />;
        })
      ) : (
          <MyPageNoData />
        )}
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
`;

const Grid1 = styled.div`
  width: 35rem;
  margin: 0 auto;
`;
const Title1 = styled.h2`
  width: 100%;
  height: 6.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0 15rem 0 0;
  line-height: 3rem;
  padding: 4rem 0 0 0;
  @media ${(props) => props.theme.mobile} {
    width: 40%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
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
