import React from "react";
import styled from "styled-components";

import { Text } from "../elements";
import HeaderLogo from "../image/logo.png";
import MyPageLogo from "../image/mypageIcon.png";
import { history } from "../redux/configureStore";
import Swal from "sweetalert2";

const Header = (props) => {
  // 로그인 유무 확인
  const is_jwt = document.cookie ? true : false;

  //로그인 시
  if (is_jwt) {
    return (
      <HEADER>
        <Logo
          style={{ cursor: "pointer" }}
          src={HeaderLogo}
          onClick={() => {
            window.location.replace("/");
          }}
        />
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "0.1rem",
          }}
        >
          밥씨
        </span>
        <Logo
          style={{ cursor: "pointer", marginLeft: "21rem" }}
          src={MyPageLogo}
          onClick={() => {
            window.location.replace("/mypage");
          }}
        />
      </HEADER>
    );
  }

  const noLogin = () => {
    if (!is_jwt) {
      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "로그인이 필요합니다",
        showConfirmButton: false,
        timer: 2000,
      });
      return history.push("/login");
    }
  };

  //비로그인 헤더
  return (
    <HEADER>
      <Logo style={{ cursor: "pointer" }} src={HeaderLogo} onClick={noLogin} />
      <span
        style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.1rem" }}
      >
        밥씨
      </span>
      <BOX>
        <Text
          size="1.5rem"
          margin="1rem"
          cursor
          _onClick={() => {
            window.location.replace("/login"); // history.push(/)를 사용하면 refresh가 안됨.
          }}
        >
          LOGIN
        </Text>
        <Logo1
          style={{ cursor: "pointer" }}
          src={MyPageLogo}
          onClick={() => {
            window.location.replace("/mypage");
          }}
        />
      </BOX>
    </HEADER>
  );
};

// 헤더 박스 모양 잡아주기
const HEADER = styled.div`
  box-sizing: border-box;
  border: none;
  /* width: 100vw; */
  width: 36rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 6%;
  background-color: #f4f0ea;
  display: flex;
  box-shadow: 0 0.3rem #e5e5e3;
  align-items: center;
`;

const BOX = styled.div`
  margin: 0 0 0 14rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

// 로고 스타일 지정
const Logo = styled.img`
  height: 2.6rem;
  margin: 0.7rem;
`;

const Logo1 = styled.img`
  height: 2.6rem;
  margin: 0.7rem;
`;

export default Header;
