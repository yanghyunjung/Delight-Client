import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Header></Header>
        <Contents>{children}</Contents>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`;

const Contents = styled.div`
  height: 94%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export default Layout;
