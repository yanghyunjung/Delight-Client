import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ChartBar = ({ width, percent, bgColor, name, marginBt }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent);
  }, [percent, width]);

  return (
    <React.Fragment>
      <Container>
        <ProgressBar
          className="progress-div"
          style={{ width: `${width}%`, marginBottom: `${marginBt}rem` }}
        >
          <Progress
            className="progress"
            style={{ width: `${value}%`, backgroundColor: `#${bgColor}` }}
          >
            <Content>
              {name} ({percent}%)
            </Content>
          </Progress>
        </ProgressBar>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  position: relative;
  &.progress-div {
    box-sizing: border-box;
    background-color: #ffffff;
  }
`;

const Progress = styled.div`
  padding: 0.7rem 1.4rem;
  height: 3rem;
  &.progress {
    background-color: #ffa012;
    box-sizing: border-box;
    transition: 1s ease;
    transition-delay: 1s;
  }
`;

const Content = styled.div`
  line-height: initial;
  font-size: 1.4rem;
  position: absolute;
`;

export default ChartBar;
