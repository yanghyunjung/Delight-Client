import React from "react";
import styled from "styled-components";

import ChartBar from "./ChartBar";

const PercentResult = (props) => {
  const data = props.data;
  console.log("===", data);
  return (
    <React.Fragment>
      <Container>
        <ContentContainer>
          <ChartBar
            width={100}
            marginBt={0.7}
            percent={data[0].score}
            bgColor={"FFA012"}
            name={data[0].name}
          />
          <ChartBar
            width={100}
            marginBt={0.7}
            percent={data[1].score}
            bgColor={"FFBC57"}
            name={data[1].name}
          />
          <ChartBar
            width={100}
            percent={data[2].score}
            bgColor={"FFD699"}
            name={data[2].name}
          />
        </ContentContainer>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

export default PercentResult;
