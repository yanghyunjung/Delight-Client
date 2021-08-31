import React, { useState, useEffect } from "react";
import styled from "styled-components";
//components
import MyPagePickCard from "./MyPagePickCard";
import MyPageNoData from "./MyPageNoData";
import MainLogCard from "./MainLogCard";
import MainLogOutCard from "./MainLogOutCard";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addHistory, addFrequency } from "../redux/modules/food";
//shared
import { getHistorySV, getFrequencySV } from "../shared/api";

const MyPageDetail = () => {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState(null);
  const [frequency, setFrequency] = useState(null);

  useEffect(() => {
    async function getHistory() {
      const { data } = await getHistorySV();
      setHistoryList(data);

      dispatch(addHistory(data)); //리덕스 저장
    }
    return getHistory();
  }, []);

  useEffect(() => {
    async function getFrequency() {
      const { data } = await getFrequencySV();
      setFrequency(data);
      dispatch(addFrequency(data));
    }
    return getFrequency();
  }, []);

  console.log("매니아 카드 콘솔  ::: ", frequency);

  return (
    <Container>
      <Grid1>
        <Title1>회원님의 음식 기록장</Title1>

        <LogOutBtn
          onClick={() => {
            return window.location.replace("/login");
          }}
        >
          logout
        </LogOutBtn>
      </Grid1>

      {frequency ? <MainLogCard data={frequency} /> : <MainLogOutCard />}

      <Title2>지난 PICK</Title2>

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
  display: flex;
  width: 310px;
  margin: 0 0 0 1rem;
`;

const Title1 = styled.h2`
  width: 100%;
  height: 6.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3rem;
  padding: 4rem 1rem 0 1rem;
  @media ${(props) => props.theme.mobile} {
    width: 40%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

const Title2 = styled.h2`
  width: 350px;
  margin: 2rem auto;
  padding: 0 0 0 3rem;
  font-size: 2rem;
  font-weight: bold;
`;

const LogOutBtn = styled.button`
  display: absolute;
  padding: 0 0 0 10rem;
  font-size: 1.5rem;
  color: #c9c9c9;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default MyPageDetail;
