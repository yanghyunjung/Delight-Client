import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import BobAI from "../image/BobAi.svg";
import ResultAI from "../image/spinner/ResultAI.svg";
import MockData from "../image/spinner/MockData.svg";

import Loader from "react-loader-spinner";
import { history } from "../redux/configureStore";

const UserRecommend = (props) => {
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setTimeout(setIsLoding, 7000, true);
  }, []);

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
          <Chat delay="1">지난 주 회원님의 기록이에요!</Chat>
          <Chat delay="1" style={{ padding: "0", backgroundColor: "#ffffff" }}>
            <div>
              <img src={MockData} alt="통계 들어가는 부분" />
            </div>
          </Chat>

          <Chat delay="1.5">
            밥씨가 지난 주 회원님의 기록을 가지고
            <br />{" "}
            <Name
              style={{
                display: "inline-block",
                color: "#141414",
                fontWeight: "700",
              }}
            >
              AI
            </Name>{" "}
            추천을 해줄거에요!
          </Chat>
          <Chat delay="2">
            오늘 하루 맛있는 밥 먹고
            <br />
            배도 든든 마음도 든든한 하루 보내세요!
          </Chat>
          {isLoding ? (
            <Chat
              delay="2.5"
              style={{
                fontWeight: "700",
              }}
            >
              결과가 나왔어요!
              <div style={{ padding: "1rem 0" }}>
                <img src={ResultAI} alt="결과가 나왔어요 밥씨" />
              </div>
              <WrapButton>
                <ResultButton
                  onClick={() => {
                    history.push("#");
                  }}
                >
                  결과 볼래요!!
                </ResultButton>
              </WrapButton>
            </Chat>
          ) : (
            <Chat delay="2.5">
              <StyledLoader
                type="ThreeDots"
                color="#C4C4C4"
                height={20}
                width={30}
              />
            </Chat>
          )}
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
  width: 24rem;
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
  padding: 1.6rem 1.5rem 1.5rem 1.5rem;
  margin: 0 5rem 1.2rem 2rem;
  line-height: 2rem;
  background-color: #f6f6f6;
  animation-duration: 1s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

export default UserRecommend;
