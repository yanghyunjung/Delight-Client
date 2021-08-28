import React from "react";

import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import MainLogOutCard from "../components/MainLogOutCard";
import MainLogCard from "../components/MainLogCard";

import RecComButton from "../image/RecButton.png";
import SearchButton from "../image/SearchButton.png";
import styled from "styled-components";
import Swal from "sweetalert2";

import { history } from "../redux/configureStore";
import { getCookie } from "../shared/Cookie";

const Main = (props) => {
  // 로그인 유무 확인
  const is_jwt = getCookie("jwt") ? true : false;

  // 로그인 시
  if (is_jwt) {
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
            즐겨 찾은 메뉴 <span style={{ color: "#FFA012" }}>Top5</span>
          </p>
        </Title>

        {/* 메뉴 & 음식 이미지 슬라이드 컴포넌트 */}
        <MainSlider />

        {/* 버튼 제작 */}
        <GRID>
          <RecButton
            src={RecComButton}
            onClick={() => {
              return history.push("/main/chat");
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
      </Container>
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
          즐겨 찾은 메뉴 <span style={{ color: "#FFA012" }}>Top5</span>
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
      <MainLogOutCard />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const GRID = styled.div`
  margin-top: 1.7rem;
  display: flex;
  padding: 0 23px 10px 23px;
  justify-content: center;
`;

const GRID2 = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 23px 10px 23px;
`;

const RecButton = styled.img`
  cursor: pointer;
  width: 32rem;
  height: 9rem;
  @media ${(props) => props.theme.mobile} {
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
  }
`;

const SeaButton = styled.img`
  cursor: pointer;
  width: 32rem;
  height: 9rem;
  @media ${(props) => props.theme.mobile} {
    padding: 0 15px 15px 15px;
    width: auto;
    height: auto;
    max-width: 85%;
    max-height: 100%;
  }
`;

export default Main;
