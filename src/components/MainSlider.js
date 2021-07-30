import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RightArrow from "../image/ArrowRight.png";
import LeftArrow from "../image/ArrowLeft.png";

const MainSlider = (props) => {
  const settings = {
    customPaging: function (i) {
      return (
        <FoodImgWrap>
          
            <img
              // 떡볶이 사진
              src={"https://hyunjung.s3.ap-northeast-2.amazonaws.com/food.jpeg"}
            />
          
          <div>
            <p style={{ fontSize: "14px" }}>떡볶이</p>
          </div>
        </FoodImgWrap>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <StlyedSlider {...settings}>
        <ImgWrap>
            <img
              // 짜장면 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food1.jpeg"
              }
            />
          <div>
            <p style={{ fontSize: "14px" }}>짜장면</p>
          </div>
        </ImgWrap>
        <ImgWrap>
            <img
              // 알리오 올리오 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food2.jpeg"
              }
            />
          <div>
            <p style={{ fontSize: "14px" }}>알리오 올리오</p>
          </div>
        </ImgWrap>
        <ImgWrap>
            <img
              // 마라탕 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food3.webp"
              }
            />
          <div>
            <p style={{ fontSize: "14px" }}>마라탕</p>
          </div>
        </ImgWrap>
      </StlyedSlider>
    </div>
  );
};
const StlyedSlider = styled(Slider)`
  .slick-dots {
    bottom: -100px;
    margin-bottom: 10px;
  }
  .slick-dots li {
    width: 70px;
    padding: 0px 10px;
  }
  position: relative;
  width: 360px;
  margin: 10px auto;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    max-width: 300px;
    height: 300px;
  }
  .slick-list div {
    outline: none;
    margin: 0px 2px 0px 0px;
  }
`;
const FoodImgWrap = styled.div`
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 25px;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;
const ImgWrap = styled.div`
  overflow: hidden;
  width: 280px;
  height: 280px;
  border-radius: 25px;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

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
        top: "315px",
        right: "0px",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img src={RightArrow} alt="오른쪽 화살표" />
    </ArrowWrap>
  );
}

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
        top: "315px",
        left: "0px",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img src={LeftArrow} alt="왼쪽 화살표" />
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
  & img {
    width: 25px;
    height: 50px;
  }
`;
export default MainSlider;
