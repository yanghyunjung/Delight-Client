import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
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
            fontSize: "24px",
            fontWeight: "bold",
            margin: "15px 0px 0px 15px",
            float: "left",
          }}
        >
          오늘 사람들이 가장 <br />
          즐겨 찾은 메뉴 <span style={{ color: "#FFA012" }}>Top10</span>
        </p>
      </Title>

      {/* 메뉴 바 */}
      <Menu />

      {/* 음식 이미지 슬라이드 */}
      <MainSlider />

      {/* 버튼 제작 */}
      <GRID>
        <RecButton src={RecComButton} />
      </GRID>

      <GRID2>
        <SeaButton src={SearchButton} />
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
  margin-top: 70px;
  display: flex;
  padding: 10px;
  justify-content: center;
`;

const GRID2 = styled.div`
  display: flex;
  justify-content: center;
`;

const RecButton = styled.img`
  width: 320px;
  height: 90px;
`;

const SeaButton = styled.img`
  width: 320px;
  height: 90px;
`;

export default Main;
