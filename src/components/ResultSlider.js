import React, { useState } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

import Tag from "./Tag";
import { history } from "../redux/configureStore";

import { sendMyPickSV } from "../redux/modules/food";

import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import PickAlert from "../image/PickAlert.svg";
import myPick from "../image/myPick.svg";
import myPicked from "../image/myPicked.svg";

const ResultSlider = ({ data, setOpenTip }) => {
  const dispatch = useDispatch();
  const [foodName, setFoodName] = useState(null);

  const handleMyPick = (food) => {
    dispatch(sendMyPickSV({ foodName: food.name }));
    setFoodName(food.name);
    setOpenTip(false);
    Swal.fire({
      width: 240,
      padding: "0 0 20px 0",
      title: `음식을 PICK 했어요!`,
      text: `기록장에서 볼 수 있어요.`,
      imageUrl: PickAlert,
      imageWidth: 240,
      imageHeight: 120,
      imageAlt: "음식을 PICK 했어요!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    centerMode: true,
    sliderToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <React.Fragment>
      <Container>
        <StlyedSlider {...settings}>
          {data &&
            data.map((item, index) => {
              const food = {
                name: item.name,
                score: item.score,
                imgUrl: item.imgUrl,
                tag: [...item.tag],
                active: true,
              };
              return (
                <WrapSlider key={index}>
                  <FoodImgWrap>
                    <img
                      src={food.imgUrl}
                      alt={food.name}
                      style={{ border: "0px solid #ffffff" }}
                    />
                    {food.name === foodName ? (
                      <MyPickButton
                        onClick={() => {
                          history.push("/mypage");
                        }}
                      >
                        <img src={myPicked} alt="my picked food" />
                      </MyPickButton>
                    ) : (
                      <MyPickButton
                        onClick={() => {
                          handleMyPick(food);
                        }}
                      >
                        <img src={myPick} alt="my pick" />
                      </MyPickButton>
                    )}
                  </FoodImgWrap>
                  <FoodName>{food.name}</FoodName>
                  <Tag tag={food.tag} />
                </WrapSlider>
              );
            })}
        </StlyedSlider>
      </Container>
    </React.Fragment>
  );
};

const WrapSlider = styled.div``;

const MyPickButton = styled.button`
  outline: none;
  border: 0px solid #ffffff;
  background-color: inherit;
  position: absolute;
  bottom: 1.2rem;
  right: 0.5rem;
  cursor: pointer;
`;

const FoodName = styled.div`
  height: 20%;
  padding: 1.8rem 2rem;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
`;

const StlyedSlider = styled(Slider)`
  width: 100%;
  padding-bottom: 3rem;
  margin: 0px auto;
  box-sizing: border-box;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    max-width: 36rem;
    height: 38 rem;
    @media ${(props) => props.theme.mobile} {
    }
  }
  .slick-list div {
    outline: none;
  }
  .slick-track {
    height: 100%;
  }
  .slick-dots {
    height: 11px;
    bottom: 0px;
  }
  .slick-dots li {
    & button:before {
      width: 11px;
      height: 11px;
      border-radius: 39px;
      background-color: #d4d4d4;
      opacity: 1;
      content: "";
    }
    &.slick-active button:before {
      left: -7px;
      border-radius: 39px;
      width: 27px;
      height: 11px;
      background-color: orange;
      content: "";
      font-size: 60px;
      opacity: 1;
      color: #ffa012;
      transition: all 0.5s;
    }
  }
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  width: 23rem;
  height: 23rem;
  @media ${(props) => props.theme.mobile} {
    width: 23rem;
    height: 23rem;
  }
  @media screen and (max-width: 360px) {
    width: 20rem;
    height: 20rem;
  }
  @media screen and (max-width: 310px) {
    width: 16rem;
    height: 16rem;
  }
  & img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
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
        bottom: "9rem",
        right: "-0.3rem",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="오른쪽 화살표" />
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
        bottom: "9rem",
        left: "-0.3rem",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="왼쪽 화살표" />
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
  & img {
    width: 25px;
    height: 50px;
  }
`;

export default ResultSlider;
