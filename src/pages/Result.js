import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import ResultSlider from "../components/ResultSlider";
import PercentResult from "../components/PercentResult";

import { getSelectFoodSV } from "../redux/modules/food";

import { history } from "../redux/configureStore";

const Result = () => {
  const dispatch = useDispatch();
  const [getResultFood, setGetResultFood] = useState(null);

  const data = useSelector((state) => state.food.result);

  useEffect(() => {
    setGetResultFood(data);
    console.log("결과페이지", data);
  }, [data]);
  return (
    <React.Fragment>
      <Container>
        <ResultContainer>
          <Grid width="100%" height="15%" padding="2rem 2rem 4rem">
            <Title>오늘은 이거 어때?</Title>
          </Grid>
          <ResultSlider data={data} />
        </ResultContainer>
        <PercentContainer>
          <SubText>추천 받은 음식 데이터 한눈에 보기</SubText>
          <PercentWrap>
            <PercentResult data={data} />
          </PercentWrap>
        </PercentContainer>
        <ButtonContainer>
          <SubText>더 많은 음식 보러 가기</SubText>
          <SearchButton
            onClick={() => {
              history.push("/search");
            }}
          >
            직접 검색하러 가기
          </SearchButton>
          <SubText>원하는 결과가 아니신가요?</SubText>
          <ReTryButton
            onClick={() => {
              window.location.replace("/recommendation");
            }}
          >
            테스트 다시하기
          </ReTryButton>
        </ButtonContainer>
      </Container>
    </React.Fragment>
  );
};

const PercentWrap = styled.div`
  background-color: #f6f6f6;
  padding: 1.4rem 1.2rem;
  margin: 0.5rem auto 1rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
`;

const ReTryButton = styled.button`
  font-weight: 700;
  color: #ffffff;
  background-color: #ffa012;
  border: none;
  border-radius: 1rem;
  min-width: 32rem;
  cursor: pointer;
  padding: 1.7rem 0;
`;

const SearchButton = styled.button`
  font-weight: 700;
  color: #ffa012;
  background-color: white;
  border: 1px solid #ffa012;
  border-radius: 1rem;
  min-width: 32rem;
  cursor: pointer;
  padding: 1.7rem 0;
  margin: 0 0 2rem 0;
`;

const Container = styled.div`
  width: 100%;
`;

const ResultContainer = styled.div`
  margin: 0 auto;
  max-width: 36rem;
`;

const PercentContainer = styled.div`
  margin: 4rem auto;
  max-width: 36rem;
`;

const ButtonContainer = styled.div`
  margin: 4rem auto 4rem auto;
  max-width: 36rem;
  text-align: center;
`;

const SubText = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.5rem;
`;

export default Result;
