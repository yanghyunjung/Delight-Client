import React from "react";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";

import RecComButton from "../image/RecButton.png";
import SearchButton from "../image/SearchButton.png";
import styled from "styled-components";

const Main = (props) => {
  return (
    <div>
      <Title>
        <p
          style={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            margin: "2rem 0 0 2.5rem",
            float: "left",
            lineHeight: "3rem",
          }}
        >
          오늘 사람들이 가장 <br />
          즐겨 찾은 메뉴 <span style={{ color: "#FFA012" }}>Top10</span>
        </p>
      </Title>

      {/* 메뉴 & 음식 이미지 슬라이드 컴포넌트 */}
      <MainSlider />

      {/* 버튼 제작 */}
      <GRID>
        <RecButton
          src={RecComButton}
          onClick={() => {
            window.location.replace("/recommendation");
          }}
        />
      </GRID>
      <GRID2>
        <SeaButton
          src={SearchButton}
          onClick={() => {
            window.location.replace("/search");
          }}
        />
      </GRID2>
      <Footer />
    </div>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const GRID = styled.div`
  margin-top: 1.7rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const GRID2 = styled.div`
  display: flex;
  justify-content: center;
`;

const RecButton = styled.img`
  cursor: pointer;
  width: 32rem;
  height: 9rem;
`;

const SeaButton = styled.img`
  cursor: pointer;
  width: 32rem;
  height: 9rem;
`;

export default Main;
