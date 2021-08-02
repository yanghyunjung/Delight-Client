import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 720px;
  margin: 0px auto;
`;

export default Layout;
