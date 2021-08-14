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
            percent={50}
            bgColor={"FFA012"}
            name={"더블불고기피자"}
          />
          <ChartBar
            width={100}
            percent={50}
            bgColor={"FFBC57"}
            name={"고구마돈가스"}
          />
          <ChartBar
            width={100}
            percent={50}
            bgColor={"FFD699"}
            name={"치즈떡볶이"}
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
