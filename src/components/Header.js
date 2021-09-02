import React from "react";
import styled from "styled-components";

import Swal from "sweetalert2";

import { Text } from "../elements";

import HeaderLogo from "../image/HeaderLogo.png";
import MyPageLogo from "../image/mypageIcon.png";

import { history } from "../redux/configureStore";
import { getCookie } from "../shared/Cookie";

// 현정 - 헤더 뷰 제작
const Header = (props) => {
  // 화현 - 로그인 기능 담당
  // 로그인 유무 확인
  const is_jwt = getCookie("jwt") ? true : false;

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

  // 로그인 시
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
        <Logo
          style={{ cursor: "pointer" }}
          src={MyPageLogo}
          onClick={() => {
            history.replace("/mypage");
          }}
        />
      </HEADER>
    );
  }

  // 비로그인 시
  return (
    <HEADER>
      <Logo
        style={{ cursor: "pointer" }}
        src={HeaderLogo}
        onClick={() => {
          window.location.replace("/");
        }}
      />
      <BOX>
        <Text
          size="1.5rem"
          margin="1rem"
          cursor
          _onClick={() => {
            history.push("/login");
          }}
        >
          LOGIN
        </Text>
        <Logo1
          style={{ cursor: "pointer" }}
          src={MyPageLogo}
          onClick={noLogin}
        />
      </BOX>
    </HEADER>
  );
};

// 헤더 박스 모양 잡아주기
const HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border: none;
  width: 36rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 6%;
  background-color: #f4f0ea;
  display: flex;
  box-shadow: 0 0.3rem #e5e5e3;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const BOX = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
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
