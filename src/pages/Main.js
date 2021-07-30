import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MainSlider from "../components/MainSlider";

import styled from "styled-components";
import { Button, Text, Grid } from "../elements";

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

      <Menu />

      <MainSlider />

      {/* 버튼 제작 */}
      <GRID>
      <Button
        bg="#FFA012"
        border="none"
        color="#ffffff "
        radius="10px"
        width="320px"
        height="81px"
        margin="10px"
        cursor
        // _onClick={() => history.push(`/recommand`)}
      >
        <Text size="14px" color="#ffffff">
          오늘 내가 먹을 음식은?
        </Text>
        <Text size="24px" color="#ffffff" bold>
          추천받으러 가기 ⟶
        </Text>
      </Button>
      </GRID>
      <Footer />
    </div>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const GRID = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  margin-top: 70px;
`;

export default Main;
