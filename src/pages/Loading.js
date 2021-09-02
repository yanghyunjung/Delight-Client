import React from "react";
import styled from "styled-components";

import Bobsi from "../image/Bobsi.png";
import Logo from "../image/WhiteLogo.png";

// 로딩 페이지 제작
const Loading = () => {
  return (
    <>
      <Screen>
        <span
          style={{
            color: "#ffffff",
            fontSize: "1.6rem",
            textAlign: "center",
            marginTop: "-7rem",
            position: "relative",
            top: "-50px",
          }}
        >
          한끼의 즐거움 <br />
          <br />
          <span
            style={{
              color: "#ffffff",
              fontSize: "8rem",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            밥씨
          </span>
        </span>

        <div style={{ position: "fixed", bottom: "0" }}>
          <WhiteLogo src={Logo} />
          <Bob src={Bobsi} />
        </div>
      </Screen>
    </>
  );
};

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36rem;
  height: 100vh;
  background-color: #ffa012;
  position: fixed;
  top: 0;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Bob = styled.img`
  width: 25rem;
  height: 22rem;
  bottom: 0;
  display: flex;
`;

const WhiteLogo = styled.img`
  width: 8rem;
  height: 3rem;
  display: flex;
  margin-top: 6rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, -80%);
`;

export default Loading;
