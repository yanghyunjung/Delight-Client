import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

import Tag from "./Tag";
import { history } from "../redux/configureStore";

import { sendMyPickSV, addHistory } from "../redux/modules/food";

import { getHistorySV } from "../shared/api";

import { useSelector, useDispatch } from "react-redux";

const ResultSlider = ({ data }) => {
  const dispatch = useDispatch();
  const [pick, setPick] = useState(true);

  const [myHistory, setMyHistory] = useState(null);
  const [foodName, setFoodName] = useState(null);

  useEffect(() => {
    async function getHistory() {
      const { data } = await getHistorySV();
      setMyHistory(data);
    }
    return getHistory();
  }, []);

  useEffect(() => {
    console.log(myHistory);
    console.log(foodName);
  }, [foodName, myHistory]);

  const [mainSlick, setMainSlick] = useState(null);
  const mainSlickRef = useRef(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    console.log(mainSlick);
  }, [mainSlick]);

  const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    className: "center",
    centerMode: true,
    sliderToShow: 1,
    arrows: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <React.Fragment>
      <Container>
        <StlyedSlider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <FoodImgWrap>
                  <img src={item.imgUrl} alt={item.name} />
                </FoodImgWrap>
                <FoodName>{item.name}</FoodName>
                <Tag tag={item.tag} />
                <StoreButtonWrap>
                  {pick ? (
                    <MyPickButton
                      onClick={() => {
                        setFoodName(item.name);
                        dispatch(sendMyPickSV({ foodName }));
                      }}
                    >
                      MY PICK!
                    </MyPickButton>
                  ) : (
                    <MyPageButton
                      onClick={() => {
                        history.push("/mypage");
                        setPick(true);
                      }}
                    >
                      기록장으로 가기!
                    </MyPageButton>
                  )}
                </StoreButtonWrap>
              </div>
            );
          })}
        </StlyedSlider>
      </Container>
    </React.Fragment>
  );
};

const StoreButtonWrap = styled.div`
  margin: 0.5rem 0 0 0;
`;

const MyPageButton = styled.button`
  font-weight: 700;
  color: #ffffff;
  background-color: #ffa012;
  border: 1px solid #ffa012;
  border-radius: 1rem;
  min-width: 15rem;
  border-radius: 5rem;
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 0.5rem 0 2.5rem 0;
  line-height: 1.9rem;
`;

const MyPickButton = styled.button`
  font-weight: 700;
  color: #ffa012;
  background-color: white;
  border: 1px solid #ffa012;
  border-radius: 1rem;
  min-width: 15rem;
  border-radius: 5rem;
  cursor: pointer;
  padding: 1rem 4rem;
  margin: 0.5rem 0 2.5rem 0;
  line-height: 1.9rem;
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
  padding-bottom: 1.2rem;
  margin: 0px auto;
  box-sizing: border-box;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    max-width: 32rem;
    height: 38 rem;
  }
  .slick-list div {
    outline: none;
  }
  .slick-track {
    height: 100%;
  }
  .slick-dots {
    height: 11px;
    bottom: 5px;
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
    }
  }
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  border: 0px solid #ffa012;
  position: relative;
  margin: 0 auto;
  height: 60%;
  transform: scale(0.95);

  & img {
    border-radius: 11.5rem;
    margin: 0 auto;
    width: 23rem;
    height: 23rem;
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
        top: "10rem",
        right: "-0.3rem",
        zIndex: 9999,
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
        top: "10rem",
        left: "-0.3rem",
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
    width: 25px;
    height: 50px;
  }
`;

export default ResultSlider;
