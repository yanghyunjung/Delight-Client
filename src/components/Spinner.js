import React from "react";
import styled, { keyframes } from "styled-components";

import spinner from "../image/spinner/Spinner.png";

import Loader from "react-loader-spinner";

const Spinner = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <p className="two">추천 받는 중...</p>
          <img src={spinner} alt="" className="one" />
          <StyledLoader type="Oval" color="#FFA012" height={250} width={250} />
          <p className="three">맛있게 먹으면 0 칼로리!</p>
        </Box>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 360px;
  height: 50rem;
  margin: 0px auto;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 50%;
  }
  25% {
    opacity: 1;
    top: 45%;
  }
  50% {
    opacity: 1;
    top: 40%;
  }
  75% {
    opacity: 1;
    top: 45%;
  }
  100% {
    opacity: 1;
    top: 50%:
  }
`;

const Box = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  & img.one {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 10%);
    animation-name: ${boxFade};
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
  & p.two {
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -320%);
  }
  & p.three {
    width: 360px;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 220px); // 750%
  }
`;

const StyledLoader = styled(Loader)`
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export default Spinner;
