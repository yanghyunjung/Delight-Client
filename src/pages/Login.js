import React from "react";
import styled from "styled-components";

import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/google.png";
import Kakao from "../image/kakao.png";
import Naver from "../image/naver.png";

import { Grid, Text } from "../elements";

import { GOOGLE_URL, KAKAO_URL, NAVER_URL } from "../redux/modules/oauth";

const Login = (props) => {

  return (
    <React.Fragment>
      <Container>
        <Box>
          <Logo src={DelightLogo} />
        </Box>

        <Box2>
          <Text
            size="1.7rem"
            bold
            width="20rem"
            text_align="center"
            padding="3rem"
          >
            당신에게 만족스러운
            <br />
            <br />
            한끼의 기쁨을 드려요
          </Text>
        </Box2>

        {/* 로그인 버튼 */}
        <Box3>

          <ButtonG href={GOOGLE_URL}>
            <Grid is_flex>
              <LogoG />
              <Text size="1.6rem" bold text_align="center" margin="auto">
                구글로 1초 로그인하기
              </Text>
            </Grid>
          </ButtonG>

          <ButtonK href={KAKAO_URL}>
            <Grid is_flex>
              <LogoK />
              <Text size="1.6rem" bold text_align="center" margin="auto">
                카카오로 1초 로그인하기
              </Text>
            </Grid>
          </ButtonK>

          <ButtonN href={NAVER_URL}>
            <Grid is_flex>
              <LogoN />
              <Text
                color="white"
                size="1.6rem"
                bold
                text_align="center"
                margin="auto"
              >
                네이버로 1초 로그인하기
              </Text>
            </Grid>
          </ButtonN>
        </Box3>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box3 = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

// sns 버튼
const ButtonG = styled.a`
  background-color: #e7e7e7;
  border: none;
  color: #ffffff;
  border-radius: 3rem;
  width: 27rem;
  height: 5.5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  text-decoration: none;
`;
const ButtonK = styled.a`
  background-color: #fae301;
  border: none;
  color: #ffffff;
  border-radius: 30px;
  width: 27rem;
  height: 5.5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  text-decoration: none;
`;
const ButtonN = styled.a`
  background-color: #03c75a;
  border: none;
  color: #ffffff;
  border-radius: 30px;
  width: 27rem;
  height: 5.5rem;
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
