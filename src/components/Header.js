import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

import HeaderLogo from "../image/DelightLogo.png";

const Header = (props) => {
  return (
    <HEADER>
      <Logo src={HeaderLogo} />
      <Text size="15px">login</Text>
    </HEADER>
  );
};

const HEADER = styled.div`
  box-sizing: border-box;
  border: none;
  width: 100%;
  height: 42px;
  background-color: #f4f0ea;
  display: flex;
  box-shadow: 0px 3px #e5e5e3;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: flex;
  width: 66px;
  height: 26px;
`;

export default Header;
