import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector, useDispatch } from "react-redux";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

const SelectedFoodSlider = () => {
  const foodList = useSelector((state) => state.food.selectList);

  const settings = {
    infinite: false,
    centerPadding: "3rem",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <React.Fragment>
      <div>
        <StlyedSlider {...settings}>
          {foodList.map((item, idx) => {
            const { food } = item;
            return (
              <FoodImgWrap key={idx}>
                <img src={food.imgUrl} alt={food.name} />
              </FoodImgWrap>
            );
          })}
        </StlyedSlider>
      </div>
    </React.Fragment>
  );
};

const StlyedSlider = styled(Slider)`
  width: 100%;
  padding-bottom: 1.2rem;
  margin: 0px auto;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    padding: 0px 0px 0px 3px;
    width: 90%;
    height: 5rem;
  }
  .slick-list div {
    display: flex;
    outline: none;
    margin: 0 0.3rem 0 0;
    width: 100%;
    height: 100%;
  }
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 1px solid #ffffff;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
  }
  & div .xbox {
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
  }
`;

// 오른쪽 화살표 커스텀마이징
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
        top: "0",
        right: "-2.4rem",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="오른쪽 화살표" />
    </ArrowWrap>
  );
}

// 왼쪽 화살표 커스텀마이징
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
        top: "0",
        left: "-2.4rem",
        zIndex: 9996,
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="왼쪽 화살표" />
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
  & img {
    width: 2.5rem;
    height: 5.2rem;
  }
`;

export default SelectedFoodSlider;
