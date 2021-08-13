import React from "react";
import styled from "styled-components";

const PercentResult = (props) => {
  const data = props.data;
  console.log("===", data);
  return (
    <React.Fragment>
      <Container>
        <ContentContainer>
          <Chart>
            <div score={data[0].score}>
              {data[0].name} ({data[0].score}%)
            </div>
          </Chart>
          <Chart>
            <div score={data[1].score}>
              {data[1].name} ({data[1].score}%)
            </div>
          </Chart>
          <Chart>
            <div score={data[2].score}>
              {data[2].name} ({data[2].score}%)
            </div>
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
    width: ${(props) => props.score}%;
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
