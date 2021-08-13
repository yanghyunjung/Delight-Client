import React from "react";
import styled from "styled-components";

import { Text } from "../elements";
import HeaderLogo from "../image/DelightLogo.png";
import { history } from "../redux/configureStore";
import Swal from "sweetalert2";

const Header = (props) => {

  // 로그인 유무 헤더 변경
  const is_jwt = document.cookie ? true : false;

  //로그인 시 헤더
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
          로그인 되었다규~
      </Text>
      </HEADER>
    );
  };

  const noLogin = () => {
    if (!is_jwt) {
      Swal.fire({
        position: 'top-center',
        icon: 'warning',
        title: '로그인이 필요합니다',
        showConfirmButton: false,
        timer: 2000
      });
      return history.push("/login");
    }
  }

  //비로그인 헤더
  return (
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
  justify-content: space-between;
`;

// 로고 스타일 지정
const Logo = styled.img`
  display: flex;
  width: 6.6rem;
  height: 2.6rem;
  margin: 1rem;
`;

export default Header;
