import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Text } from "../elements";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RightArrow from "../image/ArrowRight.png";
import LeftArrow from "../image/ArrowLeft.png";

const MainSlider = (props) => {
  useEffect(() => {
    const list = document.querySelector(".slick-list");
    list.style.setProperty("width", "25rem", "important");
    console.log(list);
  });

  const foods = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <StlyedSlider {...foods}>
        <Card>
          <ImgWrap style={{ marginBottom: "0.7rem" }}>
            <img
              // 알리오 올리오 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food2.jpeg"
              }
            />
          </ImgWrap>
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            1위 <br />
            알리오 올리오
          </span>
        </Card>

        <Card>
          <ImgWrap style={{ marginBottom: "0.7rem" }}>
            <img
              // 마라탕 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food3.webp"
              }
            />
          </ImgWrap>
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            2위 <br />
            마라탕
          </span>
        </Card>

        <Card>
          <ImgWrap style={{ marginBottom: "0.7rem" }}>
            <img
              // 짜장면 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food1.jpeg"
              }
            />
          </ImgWrap>
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            3위 <br />
            짜장면
          </span>
        </Card>

        <Card>
          <ImgWrap style={{ marginBottom: "0.7rem" }}>
            <img
              // 떡볶이 사진
              src={"https://hyunjung.s3.ap-northeast-2.amazonaws.com/food.jpeg"}
            />
          </ImgWrap>
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            4위 <br />
            떡볶이
          </span>
        </Card>
      </StlyedSlider>
    </div>
  );
};

const StlyedSlider = styled(Slider)`
  .slick-dots {
    margin-bottom: 1rem;
  }
  .slick-dots li {
    width: 5rem;
    padding: 0 1rem;
  }
  position: relative;
  margin-top: 2rem;
  .slick-list {
    text-align: center;
    margin: 0rem auto;
    width: 30rem;
    height: 30rem;
  }
  .slick-list div {
    outline: none;
  }

  .pro-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    height: 1rem;
    background: #ccc;
  }
`;

const Card = styled.div``;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  box-sizing: border-box;
  & img {
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0rem;
    padding: 0rem;
  }
`;

// 이후 화살표
function NextArrow(props) {
  const { style, onClick } = props;
  if (onClick === null) {
    return "";
  }
  return (
    <ArrowWrap
      style={{
        ...style,
        position: "absolute",
        top: "9rem",
        right: "0rem",
        zIndex: 9999,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={RightArrow} alt="오른쪽 화살표" />
    </ArrowWrap>
  );
}

// 이전 화살표
function PrevArrow(props) {
  const { style, onClick } = props;
  if (onClick === null) {
    return "";
  }
  return (
    <ArrowWrap
      style={{
        ...style,
        position: "absolute",
        top: "9rem",
        left: "0rem",
        zIndex: 9999,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={LeftArrow} alt="왼쪽 화살표" />
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
  & img {
    width: 3.3rem;
    height: 6.5rem;
  }
`;
export default MainSlider;
