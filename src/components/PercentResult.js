import React from "react";
import styled from "styled-components";

import ChartBar from "./ChartBar";

import { VictoryPie } from "victory";

const PercentResult = (props) => {
  const data = props.data;
  console.log("===", data);
  return (
    <React.Fragment>
      <Container>
        <ContentContainer>
          <VictoryPie
            data={[
              { x: data[0].name, y: data[0].score },
              { x: data[1].name, y: data[1].score },
              { x: data[2].name, y: data[2].score },
            ]}
            animate={{
              duration: 1000,
            }}
            colorScale={["#FFA012", "#FFBC57", "#FFD699"]}
            startAngle={0}
            endAngle={360}
            padding={100}
            width={350}
            height={350}
          />
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
