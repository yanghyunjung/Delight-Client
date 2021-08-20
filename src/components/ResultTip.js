import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Tip from "../image/Tip.svg";
import ToolAI from "../image/ToolAI.svg";

const ResultTip = () => {
  return (
    <>
      <Container>
        <ContentWrap>
          <ToolTip>
            <TipImage src={Tip} alt="tooltip" />
            <TipText>
              <ToolAi src={ToolAI} alt="알려주는 밥씨" />
              <InnerTitle>
                밥씨의 AI기반 추천은 이렇게 이루어지고 있어요!
              </InnerTitle>
              <InnerText>
                먼저, 여러분이 선택한 음식의 재료 정보와 인스타그램의
                <br />
                해시태그 정보를 활용해요. 이를 통해 머신러닝의 추천
                <br />
                알고리즘으로 3가지 음식을 추천받아요.
              </InnerText>
              <InnerText>
                3가지 음식은 앞서 선택한 음식과 가장 유사도가 높은
                <br />
                음식이에요. 밥씨는 이를 퍼센트로 표현하고 있어요 !
              </InnerText>
            </TipText>
          </ToolTip>
        </ContentWrap>
      </Container>
    </>
  );
};

const ToolAi = styled.img`
  position: absolute;
  bottom: -35px;
  right: 30px;
  z-index: 101;
`;

const InnerText = styled.p`
  font-weight: 500;
  font: 500 1.2rem "Noto-Sans";
  line-height: 1.8rem;
  margin-top: 0.9rem;
  padding: 0 0 0 0.4rem;
  color: #ffffff;
  :before {
    content: "- ";
    margin-bottom: 100px;
  }
`;

const InnerTitle = styled.h1`
  color: #ffffff;
  line-height: 2rem;
  font: 700 1.45rem "Noto-Sans";
`;

const TipImage = styled.img`
  display: inline-block;
  &:hover {
    & + span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const TipText = styled.span`
  text-align: start;
  position: absolute;
  width: 29rem;
  height: 11rem;
  padding: 3rem 0.8rem 5rem 1.6rem;
  visibility: hidden;
  background-color: #7da9ff;
  bottom: 35px;
  right: -5px;
  opacity: 0;
  transition: all 0.5s;
  z-index: 99;
  border-radius: 1rem;
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 0;
    height: 0;
    border: 13px solid transparent;
    border-top-color: #7da9ff;
    border-bottom: 0;
    border-right: 0;
    margin-left: -6.5px;
    margin-bottom: -13px;
  }
`;

const ToolTip = styled.div`
  position: relative;
`;

const ContentWrap = styled.div``;

const Container = styled.div`
  width: 100%;
`;

export default ResultTip;
