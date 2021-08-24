import React from "react";
import styled from "styled-components";

import PieChart from "./PieChart";

const PercentResult = (props) => {
  const data = props.data;
  return (
    <React.Fragment>
      <Container>
        <ContentContainer >
          <PieChart data={data}/>
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
