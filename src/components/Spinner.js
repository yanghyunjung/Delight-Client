import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Grid } from "../elements";

import spinner from "../image/spinner/Spinner.svg";
import BobAI from "../image/BobAi.svg";

import Loader from "react-loader-spinner";

const Spinner = (props) => {
  const [isLoding, setIsLoding] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <WrapContent>
          <Wrap>
            <AiImgWrap>
              <img src={BobAI} alt="AI" />
            </AiImgWrap>
            <WrapName>
              <Name>밥씨</Name>
            </WrapName>
          </Wrap>
          <Chat className="chat" delay="1">
            밥씨가 메뉴를 정하고 있어요!
          </Chat>

          <Chat className="chat" delay="1.5">
            오늘 하루 맛있는 밥 먹고
            <br /> 배도 든든 마음도 든든한 하루 보내세요!
          </Chat>
          {isLoding ? (
            <Chat
              className="chat"
              delay="2"
              style={{
                fontWeight: "700",
                fontSize: "1.7rem",
                padding: "1.7rem",
              }}
            >
              결과가 나왔어요!
            </Chat>
          ) : (
            <Chat className="chat" delay="2">
              <StyledLoader
                type="ThreeDots"
                color="#C4C4C4"
                height={20}
                width={30}
              />
            </Chat>
          )}

          <WrapButton>
            {isLoding ? (
              <ResultButton>결과 볼래요!</ResultButton>
            ) : (
              <ResultButton
                disabled={!isLoding}
                style={{ backgroundColor: "#c8c8c8" }}
              >
                결과 기다리고 있어요!
              </ResultButton>
            )}
          </WrapButton>
        </WrapContent>
      </Container>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 100%;
  padding: 2rem 0 0 1rem;
  display: flex;
  justify-content: flex-start;
`;

const WrapButton = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ResultButton = styled.button`
  font-weight: 700;
  color: #ffffff;
  background-color: #ffa012;
  border: none;
  border-radius: 1rem;
  width: 32rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 1.7rem 0;
`;

const WrapName = styled.div`
  margin: 1.7rem 0 3rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 160, 18, 1);
  font-weight: 600;
`;

const AiImgWrap = styled.div`
  padding: 0.4rem 0 0 0;
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const WrapContent = styled.div`
  margin: 0 auto;
  max-width: 36rem;
  height: 92vh;
  position: relative;
`;

const Slideup = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledLoader = styled(Loader)`
  z-index: 10;
`;

const Chat = styled.span`
  opacity: 0;
  display: inline-block;
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 0 2rem 1.2rem 5rem;
  background-color: #f6f6f6;
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
  &.chat {
    position: relative;
    background: #f6f6f6;
    border-radius: 0.8rem;
  }
  &.chat:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #f6f6f6;
    border-left: 0;
    margin-top: -10px;
    margin-left: -5px;
  }
`;

export default Spinner;
