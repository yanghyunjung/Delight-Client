import React from "react";

import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import MainCard from "../components/MainCard";
import MainLogCard from "../components/MainLogCard";

import RecComButton from "../image/RecButton.png";
import SearchButton from "../image/SearchButton.png";
import styled from "styled-components";
import Swal from "sweetalert2";

import { history } from "../redux/configureStore";

const Main = (props) => {
  // 로그인 유무 확인
  const is_jwt = document.cookie ? true : false;

  // 로그인 시
  if (is_jwt) {
    return (
      <div>
        <Title>
          <p
            style={{
              fontSize: "2.4rem",
              fontWeight: "bold",
              margin: "2rem 0 0 2.5rem",
              float: "left",
              lineHeight: "3.5rem",
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
              return history.push("/main/:id");
            }}
          />
        </GRID>
        <GRID2>
          <SeaButton
            src={SearchButton}
            onClick={() => {
              return history.push("/search");
            }}
          />
        </GRID2>
        <MainLogCard />
        <Footer />
      </div>
    );
  }

  // 비로그인 시
  return (
    <Container>
      <Title>
        <p
          style={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            margin: "2rem 0 0 2.5rem",
            float: "left",
            lineHeight: "3.5rem",
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
            if (!is_jwt) {
              Swal.fire({
                position: "top-center",
                icon: "info",
                title: "로그인이 필요합니다",
                showConfirmButton: false,
                timer: 2000,
              });
              return history.push("/login");
            }
          }}
        />
      </GRID>
      <GRID2>
        <SeaButton
          src={SearchButton}
          onClick={() => {
            if (!is_jwt) {
              Swal.fire({
                position: "top-center",
                icon: "info",
                title: "로그인이 필요합니다",
                showConfirmButton: false,
                timer: 2000,
              });
              return history.push("/login");
            }
          }}
        />
      </GRID2>
      <MainCard />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 36rem;
  margin: 0 auto;
`;

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
