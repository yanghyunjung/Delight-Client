import React from "react";
import styled from "styled-components";

import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/googlelogo.png";
import Kakao from "../image/kakaologo.png";
import Naver from "../image/naverlogo.png";

import { Grid, Text } from "../elements";

import { GOOGLE_URL, KAKAO_URL, NAVER_URL } from "../redux/modules/oauth";

const Login = () => {
  return (
    <React.Fragment>
      <Grid>
        <Logo src={DelightLogo} />
      </Grid>

      <Grid>
        <Text size="1.6rem" bold>
          당신에게 만족스러운
          <br />
          <br />
          한끼의 기쁨을 드려요
        </Text>
      </Grid>

      {/* 로그인 버튼 */}
      <Grid is_flex wrap>
        <ButtonG href={GOOGLE_URL}>
          <Grid is_flex2>
            <LogoG />
            <Text size="16px" bold text_align="center" margin="auto">
              구글로 1초 로그인하기
            </Text>
          </Grid>
        </ButtonG>

        <ButtonK href={KAKAO_URL}>
          <Grid is_flex>
            <LogoK />
            <Text size="16px" bold text_align="center" margin="auto">
              카카오로 1초 로그인하기
            </Text>
          </Grid>
        </ButtonK>

        <ButtonN href={NAVER_URL}>
          <Grid is_flex>
            <LogoN />
            <Text
              color="white"
              size="16px"
              bold
              text_align="center"
              margin="auto"
            >
              네이버로 1초 로그인하기
            </Text>
          </Grid>
        </ButtonN>
      </Grid>
    </React.Fragment>
  );
};

// sns 버튼
const ButtonG = styled.a`
  background-color: #e7e7e7;
  border: none;
  color: #ffffff;
  border-radius: 3rem;
  width: 28rem;
  height: 5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  text-decoration: none;
`;
const ButtonK = styled.a`
  background-color: #fae301;
  border: none;
  color: #ffffff;
  border-radius: 30px;
  width: 28rem;
  height: 5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  text-decoration: none;
`;
const ButtonN = styled.a`
  background-color: #03c75a;
  border: none;
  color: #ffffff;
  border-radius: 30px;
  width: 28rem;
  height: 5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 19rem;
  height: 6rem;
`;

// sns 로고
const LogoG = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Google});
`;
const LogoK = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Kakao});
`;
const LogoN = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Naver});
`;

export default Login;
