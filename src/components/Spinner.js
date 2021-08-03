import React from "react";
import styled, { keyframes } from "styled-components";

import spinner from "../image/spinner/Spinner.svg";

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
  width: 100%;
  height: 94%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
    top: 45%;
  }
  100% {
    opacity: 1;
    top: 50%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  & img.one {
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    animation-name: ${boxFade};
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  & p.two {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -390%);
  }
  & p.three {
    width: 36rem;
    font-size: 2.4rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 220px);
    @media (min-width: 768px) {
      transform: translate(-50%, 350px);
    }
  }
`;

const StyledLoader = styled(Loader)`
  background-color: #ffa012;
  border-radius: 100rem;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export default Spinner;
