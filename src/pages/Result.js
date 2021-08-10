import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import ResultSlider from "../components/ResultSlider";

const Result = () => {
  return (
    <React.Fragment>
      <Container>
        <ResultContainer>
          <Grid width="100%" height="15%" padding="2rem 2rem 4rem">
            <Title>오늘은 이거 어때?</Title>
          </Grid>
          <ResultSlider />
        </ResultContainer>
        <ButtonContainer>
          <Wrap>
            <SubText>더 많은 음식 보러 가기</SubText>
            <SearchButton>직접 검색하러 가기</SearchButton>
            <SubText>원하는 결과가 아니신가요?</SubText>
            <ReTryButton>테스트 다시하기</ReTryButton>
          </Wrap>
        </ButtonContainer>
      </Container>
    </React.Fragment>
  );
};

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

const ButtonContainer = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 36rem;
`;

const Wrap = styled.div`
  text-align: center;
`;

const SubText = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.5rem;
`;

export default Result;
