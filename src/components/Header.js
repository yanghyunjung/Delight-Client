import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

import HeaderLogo from "../image/DelightLogo.png";

const Header = (props) => {
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
  width: 100vw;
  height: 6%;
  background-color: #f4f0ea;
  display: flex;
  box-shadow: 0 0.3rem #e5e5e3;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

// 로고 스타일 지정
const Logo = styled.img`
  display: flex;
  width: 6.6rem;
  height: 2.6rem;
  margin: 1rem;
`;

export default Header;
