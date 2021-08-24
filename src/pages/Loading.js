import React from "react";
import styled from "styled-components";

import Bobsi from "../image/Bobsi.png";
import Logo from "../image/WhiteLogo.png";

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
        <WhiteLogo src={Logo} />
        <div style={{ position: "absolute", bottom: "0" }}>
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
  height: 64rem;
  background-color: #ffa012;
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
`;

export default Loading;
