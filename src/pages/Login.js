import React from "react";
import styled from "styled-components";

//images
import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/google.png";
import Kakao from "../image/kakao.png";
import Naver from "../image/naver.png";
//elements
import { Text } from "../elements";
//redux
import { GOOGLE_URL, KAKAO_URL, NAVER_URL } from "../redux/modules/oauth";
//shared
import { deleteCookie } from '../shared/Cookie';

const Login = (props) => {

  const delete_jwt = deleteCookie("jwt") ? true : false;

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

            <LogoG />
            <Text size="1.6rem" bold text_align="center" margin="auto">
              구글로 1초 로그인하기
              </Text>

          </ButtonG>

          <ButtonK href={KAKAO_URL}>

            <LogoK />
            <Text size="1.6rem" bold text_align="center" margin="auto">
              카카오로 1초 로그인하기
              </Text>

          </ButtonK>

          <ButtonN href={NAVER_URL}>
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
          </ButtonN>
        </Box3>
      </Container>

    </React.Fragment>
  );
};

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 11rem 0 0 0;
  margin:0 auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 100%;
  height: 6rem;  
    
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box3 = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 110vw;
`;

// sns 버튼
const ButtonG = styled.a`
  display: flex;
  align-items:center;
  justify-content:space-between;
  background-color: #e7e7e7;
  border: none;
  color: #ffffff;
  border-radius: 3rem;
  width: 27rem;
  height: 5.5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  margin: 0 auto;
  text-decoration: none;
  @media ${(props) => props.theme.mobile} {
    width: 70vw;
  }
`;

const ButtonK = styled.a`
  display: flex;
  align-items:center;
  justify-content:space-between;
  background-color: #fae301;
  border: none;
  color: #ffffff;
  border-radius: 3rem;
  width: 27rem;
  height: 5.5rem;
  cursor: pointer;
  padding: 0 1rem 0 5rem;
  margin: 0 auto;
  text-decoration: none;
  @media ${(props) => props.theme.mobile} {
    width: 70vw;
  }
`;
const ButtonN = styled.a`
  display: flex;
  align-items:center;
  justify-content:space-between;
  background-color: #03c75a;
  border: none;
  color: #ffffff;
  border-radius: 30px;
  width: 27rem;
  height: 5.5rem;
  cursor: pointer;
  padding: 0 0 0 5rem;
  margin: 0 auto;
  text-decoration: none;
  @media ${(props) => props.theme.mobile} {
    width: 70vw;
    }
`;

// sns 로고
const LogoG = styled.div`
position: absolute;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Google});
`;
const LogoK = styled.div`
position: absolute;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Kakao});
`;
const LogoN = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${Naver});
`;

export default Login;
