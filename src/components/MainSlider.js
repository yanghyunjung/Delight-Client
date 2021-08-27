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

  useEffect(() => {
    dispatch(getCategoryThunk(0));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    centerMode: true,
    variableWidth: true,
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
    { categoryId: 5, category: "분식" },
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
            <ImgWrap>
              <img src={food.imgUrl} alt="food" />
            </ImgWrap>
            <span
              style={{
                fontSize: "2.2em",
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
    @media ${(props) => props.theme.mobile} {
      max-width: initial;
    }
  }
  .slick-list div {
    outline: none;
    @media ${(props) => props.theme.mobile} {
      display: flex;
      align-items: center;
    }
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
  height: 21rem;
  width: 21rem;
  transform: scale(0.95);
  & img {
    border-radius: 1.5rem;
    margin: 0 auto;
    width: 21rem;
    height: 21rem;
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      height: 100%;
    }
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
    @media ${(props) => props.theme.mobile} {
      width: 2.8rem;
      height: 5.5rem;
    }
  }
`;

const MenuList = styled.nav`
  display: flex;
  box-sizing: border-box;
  padding: 16px;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding: 16px;
    justify-content: space-evenly;
  }
`;

const MenuItem = styled.a`
  color: #979797;
  font-size: 2vh;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  ${(props) =>
    props.tabIndex &&
    `  &:nth-child(${props.tabIndex}) {
    color: black;
    font-weight: 800;
    border-bottom: 1.8px solid;
    transition: 0.3s ease-in-out; // 시작지점과 종료지점의 변화가 서서히 일어나게끔
  }`}
  @media ${(props) => props.theme.mobile} {
    font-size: 2.3vh;
    padding: 0 5px 5px 5px;
    min-width: 20px;
  }
`;

export default MainSlider;
