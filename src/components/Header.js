import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

import HeaderLogo from "../image/DelightLogo.png";

import { getCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux"; // store에 있는 값을 가져와서 쓸 수 있게 해주는 친구
import { history } from "../redux/configureStore";

const Header = (props) => {
  // 로그인 유무 check

  const is_jwt = document.cookie ? true : false;

  //로그인 헤더
  if (is_jwt) {
    return (
      <Container>
        <HEADER>
          <Logo
            style={{ cursor: "pointer" }}
            src={HeaderLogo}
            onClick={() => {
              window.location.replace("/");
            }}
          />
          <Text
            size="1.5rem"
            margin="1rem"
            cursor
            _onClick={() => {
              if (
                window.confirm(
                  `준비중인 서비스입니다.\n메인페이지로 이동합니당!`
                ) === true
              ) {
                history.push("/");
              }
            }}
          >
            마이페이지
          </Text>
          <Text
            size="1.5rem"
            margin="1rem"
            cursor
            _onClick={() => {
              window.location.replace("/"); // history.push(/)를 사용하면 refresh가 안됨.
            }}
          >
            Welcome
          </Text>
        </HEADER>
      </Container>
    );
  }

  const noLogin = () => {
    if (!is_jwt) {
      window.alert("로그인이 필요한 서비스입니다.");
      return history.push("/login");
    }
  };

  //비로그인 헤더
  return (
    <Container>
      <HEADER>
        <Logo
          style={{ cursor: "pointer" }}
          src={HeaderLogo}
          onClick={noLogin}
        />

        <Text
          size="1.5rem"
          margin="1rem"
          cursor
          _onClick={() => {
            window.location.replace("/login"); // history.push(/)를 사용하면 refresh가 안됨.
          }}
        >
          login
        </Text>
      </HEADER>
    </Container>
  );
};

// 헤더 박스 모양 잡아주기
const HEADER = styled.div`
  box-sizing: border-box;
  border: none;
  width: 100vw;
  height: 42px;
  background-color: #f4f0ea;
  display: flex;
  box-shadow: 0 0.3rem #e5e5e3;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

// 로고 스타일 지정
const Logo = styled.img`
  display: flex;
  width: 6.6rem;
  height: 2.4rem;
  margin: 1rem;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 21;
`;

export default Header;
