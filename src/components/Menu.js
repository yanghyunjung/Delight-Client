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

const MenuList = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: gray;
  cursor: pointer;
  width: auto;
  padding: 8px;
  display: flex;
  font-size: 14px;
  li:checked{
      color: black;
  }
`;

export default Menu;
