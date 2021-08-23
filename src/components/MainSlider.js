import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../image/ArrowRight.png";
import LeftArrow from "../image/ArrowLeft.png";

import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk, getFoods } from "../redux/modules/category";

const MainSlider = (props) => {
  const dispatch = useDispatch();
  const foods = useSelector(getFoods);

  const sliderRef = useRef();

  // 실행했을 때 카테고리 탭 기본값 설정
  const [tabIndex, setTabIndex] = useState(1);

  // 위치를 잡기 위해 슬라이드 이미지 크기(width) 임의로 변경 -> useEffect 사용함
  useEffect(() => {
    // const list = document.querySelector(".slick-list");
    // list.style.setProperty("width", "25rem", "important");
    dispatch(getCategoryThunk(0));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const menuItem = [
    { categoryId: 0, category: "전체" },
    { categoryId: 1, category: "한식" },
    { categoryId: 2, category: "일식" },
    { categoryId: 3, category: "중식" },
    { categoryId: 4, category: "양식" },
    { categoryId: 5, category: "패스트푸드" },
    { categoryId: 6, category: "분식" },
  ];
  return (
    <div>
      <MenuList>
        {menuItem.map(({ categoryId, category }, i) => {
          return (
            <MenuItem
              tabIndex={tabIndex}
              onClick={() => {
                dispatch(getCategoryThunk(categoryId));
                setTabIndex(i + 1);
                sliderRef.current.slickGoTo(0);
              }}
            >
              {category}
            </MenuItem>
          );
        })}
      </MenuList>

      <StyledSlider {...settings} ref={sliderRef}>
        {foods.map((food, index) => (
          <Card>
            <ImgWrap style={{ marginBottom: "0.7rem" }}>
              <img src={food.imgUrl} alt="food" />
            </ImgWrap>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "2.8rem",
              }}
            >
              {index + 1}위 <br />
              {food.name}
            </span>
          </Card>
        ))}
      </StyledSlider>
    </div>
  );
};

// 이미지 슬라이드 스타일 적용하기
const StyledSlider = styled(Slider)`
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
`;

const Card = styled.div``;

const ImgWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
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
        top: "8.5rem",
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
        top: "8.5rem",
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
    width: 2.3rem;
    height: 5rem;
  }
`;

const MenuList = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 2rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: #979797;
  cursor: pointer;
  width: auto;
  padding: 0.8rem;
  display: flex;
  font-size: 1.4rem;
  ${(props) =>
    props.tabIndex &&
    `  &:nth-child(${props.tabIndex}) {
    color: black;
    font-weight: bold;
    border-bottom: 1.8px solid;
    transition: 0.3s ease-in-out; // 시작지점과 종료지점의 변화가 서서히 일어나게끔
  }`}
`;

export default MainSlider;
