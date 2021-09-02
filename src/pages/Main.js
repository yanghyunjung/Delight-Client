import React from "react";

import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import MainLogOutCard from "../components/MainLogOutCard";
import MainLogCard from "../components/MainLogCard";

import RecComButton from "../image/Rec.png";
import SearchButton from "../image/Search.png";
import styled from "styled-components";
import Swal from "sweetalert2";

import { history } from "../redux/configureStore";
import { getCookie } from "../shared/Cookie";

// 현정 - 메인 페이지 제작 & 기능 구현 
const Main = (props) => {
  // 화현 - 로그인 기능 담당
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
        <GRID3>
          <Span>나의 데이터가 궁금하다면?</Span>
          <Span2
            onClick={() => {
              return history.push("/mypage");
            }}
          >
            자세히 보기
          </Span2>
        </GRID3>
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
      <GRID3>
        <Span>나의 데이터가 궁금하다면?</Span>
        <Span2
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
        >
          자세히 보기
        </Span2>
      </GRID3>
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

const GRID3 = styled.div`
  display: grid;
  grid-template-columns: 19rem 2fr;
`;

const Span = styled.a`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1.5rem 0 2rem 2rem;
`;

const Span2 = styled.a`
  font-size: 1.2rem;
  padding: 1.9rem 2.5rem 2rem 0;
  color: #acacac;
  cursor: pointer;
  text-align: right;
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
