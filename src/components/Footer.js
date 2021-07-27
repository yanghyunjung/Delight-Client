import React from "react";
import styled from "styled-components";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = (props) => {
  return (
    <FooterStyle>
      <StarDiv>
        <svg // 별 모양 svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.81385 0.866979C4.85692 0.666411 5.1431 0.666411 5.18617 0.866979V0.866979C5.61082 2.84451 7.15557 4.38926 9.1331 4.81391V4.81391C9.33367 4.85698 9.33367 5.14316 9.1331 5.18623V5.18623C7.15557 5.61088 5.61082 7.15563 5.18617 9.13316V9.13316C5.1431 9.33373 4.85692 9.33373 4.81385 9.13316V9.13316C4.3892 7.15563 2.84445 5.61088 0.866918 5.18623V5.18623C0.66635 5.14316 0.66635 4.85698 0.866918 4.81391V4.81391C2.84445 4.38926 4.3892 2.84451 4.81385 0.866979V0.866979Z"
            fill="white"
          />
        </svg>
      </StarDiv>

      <Div>
        <Content>
          당신에게 만족스러운 <br/> 한끼의 기쁨을 드려요
        </Content>
        <Icon>
          <InstagramIcon // 인스타그램 아이콘
            style={{ fontSize: "2rem", margin: "10px" }}
          ></InstagramIcon>
          <FacebookIcon // 페이스북 아이콘
            style={{ fontSize: "2rem", margin: "10px" }}
          ></FacebookIcon>
          <TwitterIcon // 노션 아이콘 없어서 일단, 트위터로 대체
            style={{ fontSize: "2rem", margin: "10px" }}
          ></TwitterIcon>
        </Icon>
        <Name>Team Delight</Name>
        <Name>delight123@naver.com</Name>
      </Div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  box-sizing: border-box;
  background-color: #d1cdc7;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 181px;
  justify-content: center;
  align-items: center;
  margin-left: -8px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StarDiv = styled.div`
  display: flex;
`;

const Content = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  line-height: 24px;
`;

const Icon = styled.div`
  display: flex;
  padding: 5px;
`;

const Name = styled.a`
  display: flex;
  font-size: 12px;
`;
export default Footer;
