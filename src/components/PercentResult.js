import React from "react";
import styled from "styled-components";

const PercentResult = (props) => {
  return (
    <React.Fragment>
      <Container>
        <ContentContainer>
          <Chart>
            <div>고구마 치즈 (60%)</div>
          </Chart>
          <Chart>
            <div>음식1 (60%)</div>
          </Chart>
          <Chart>
            <div>음식1 (60%)</div>
          </Chart>
        </ContentContainer>
      </Container>
    </React.Fragment>
  );
};

const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  margin: 1rem 0;
  padding: 0rem 0rem;
  box-sizing: border-box;
  & div {
    box-sizing: border-box;
    background-color: #ffa012;
    font-size: 1.4rem;
    padding: 1rem 0 1rem 1.4rem;
    width: 60%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

export default PercentResult;
