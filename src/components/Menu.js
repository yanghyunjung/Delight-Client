import React from "react";
import styled from "styled-components";

const Menu = (props) => {
  return (
    <MenuList>
      <MenuItem>전체</MenuItem>
      <MenuItem>한식</MenuItem>
      <MenuItem>분식</MenuItem>
      <MenuItem>양식</MenuItem>
      <MenuItem>일식</MenuItem>
      <MenuItem>패스트푸드</MenuItem>
      <MenuItem>중식</MenuItem>
    </MenuList>
  );
};

const MenuList = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.li`
  width: auto;
  margin-left: 50px;
  display: flex;
  font-size: 14px;
`;

export default Menu;
