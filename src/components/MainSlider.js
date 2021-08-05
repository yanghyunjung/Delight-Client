import React, { useEffect } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../image/ArrowRight.png";
import LeftArrow from "../image/ArrowLeft.png";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as categoryActions } from "../redux/modules/category";

const MainSlider = (props) => {
  // const dispatch = useDispatch();
  // const category_list = useSelector((state) => state.list.category_list);

  // useEffect(() => {
  //   dispatch(categoryActions.getCategoriesDB());
  // }, []);

  // 슬라이드 이미지 크기(width) 임의로 변경하기 위해 useEffect 사용함
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
      <MenuList>
        <MenuItem>전체</MenuItem>
        <MenuItem>한식</MenuItem>
        <MenuItem>분식</MenuItem>
        <MenuItem>양식</MenuItem>
        <MenuItem>일식</MenuItem>
        <MenuItem>패스트푸드</MenuItem>
        <MenuItem>중식</MenuItem>
      </MenuList>

      <StlyedSlider {...foods}>
        {/* {category_list.map((category, index) => ( */}
        <Card>
          <ImgWrap style={{ marginBottom: "0.7rem" }}>
            {/* <img
                src={
                  category.imgUrl &&
                  category.imgUrl[0]?.imgUrl
                }
                alt="category"
              /> */}
            <img
              // 알리오 올리오 사진
              src={
                "https://hyunjung.s3.ap-northeast-2.amazonaws.com/food2.jpeg"
              }
            />
          </ImgWrap>
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            1위 <br />
            {/* {category.name} */} 알리오올리오
          </span>
        </Card>
        {/* ))} */}
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
            {/* {category.name} */} 알리오올리오
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
  margin-top: 0.8rem;
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
  color: gray;
  cursor: pointer;
  width: auto;
  padding: 0.8rem;
  display: flex;
  font-size: 1.4rem;
  &:hover {
    color: black;
    border-bottom: 1.5px solid;
    transition: 0.3s ease-in-out; // 시작지점과 종료지점의 변화가 서서히 일어남.
  }
`;

export default MainSlider;
