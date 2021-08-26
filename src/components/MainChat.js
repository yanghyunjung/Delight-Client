import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import BobAI from "../image/BobAi.svg";
import MainAI from "../image/spinner/MainAI.svg";
import ErrorAlert from "../image/ErrorAlert.svg";

import Swal from "sweetalert2";

import Loader from "react-loader-spinner";
import { history } from "../redux/configureStore";

const MainChat = (props) => {
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
          <Chat delay="1">
            안녕하세요! <br />
            여러분의 추천 요정 밥씨에요.
          </Chat>

          <Chat delay="1.5">오늘도 뭐 먹을지 고민되시죠?</Chat>
          <Chat delay="2">
            밥씨가{" "}
            <Name
              style={{
                display: "inline-block",
                color: "#141414",
                fontWeight: "700",
              }}
            >
              AI기반 추천
            </Name>
            으로
            <br />
            여러분의 고민을 해결해 드릴게요!
          </Chat>
          <Chat
            delay="2.5"
            style={{
              fontWeight: "700",
            }}
          >
            어떻게 추천 받을래요?
            <div style={{ padding: "1rem 0" }}>
              <img src={MainAI} alt="추천 받을래요? 밥씨" />
            </div>
            <WrapButton>
              <ResultButton
                style={{ margin: "0 0 1.2rem 0" }}
                onClick={() => {
                  history.push("/recommendation");
                }}
              >
                기본 추천
              </ResultButton>
              <ResultButton
                onClick={() => {
                  Swal.fire({
                    width: 240,
                    padding: "0 0 20px 0",
                    title: `서비스 준비 중입니다!`,
                    imageUrl: ErrorAlert,
                    imageWidth: 240,
                    imageHeight: 120,
                    imageAlt: "준비 중인 컨텐츠입니다!",
                    showConfirmButton: false,
                    timer: 1100,
                  });
                }}
              >
                사용자 기반 추천
              </ResultButton>
            </WrapButton>
          </Chat>
        </WrapContent>
      </Container>
    </React.Fragment>
  );
};

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ResultButton = styled.button`
  font-weight: 700;
  color: #141414;
  background-color: #ffffff;
  border: 1px solid #141414;
  border-radius: 1rem;
  width: 19.6rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 1.7rem 0;
  @media screen and (max-width: 300px) {
    width: 16rem;
    margin: 0;
  }
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

const Wrap = styled.div`
  width: 100%;
  padding: 2rem 0 0 1rem;
  display: flex;
  justify-content: flex-start;
`;

const WrapContent = styled.div`
  margin: 0 auto;
  width: 36rem;
  height: 92vh;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
  }
`;

const Container = styled.div`
  width: 100%;
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

const Chat = styled.span`
  opacity: 0;
  display: inline-block;
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 2rem;
  padding: 1.6rem 1.5rem 1.5rem 1.5rem;
  margin: 0 5rem 1.2rem 2rem;
  line-height: 2rem;
  background-color: #f6f6f6;
  animation-duration: 1s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
  & img {
    @media screen and (max-width: 300px) {
      width: 16rem;
    }
  }
`;

export default MainChat;
