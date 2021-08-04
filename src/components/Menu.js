import React from "react";
import styled from "styled-components";

const Menu = (props) => {
  //   const menus = [
  //     { name: "전체" },
  //     { name: "한식" },
  //     { name: "분식" },
  //     { name: "양식" },
  //     { name: "일식" },
  //     { name: "패스트푸드" },
  //     { name: "중식" },
  //   ];

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
  padding: 2rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: gray;
  cursor: pointer;
  width: auto;
  padding: 0.8rem;
  display: flex;
  font-size: 1.4rem;
  &:hover{
    color: black;
    border-bottom: 1.5px solid;
    transition: .3s ease-in-out;
  }
`;

export default Menu;
