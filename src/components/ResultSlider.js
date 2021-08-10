import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

import Tag from "./Tag";

const data = [
  {
    name: "떡볶이",
    imgUrl:
      "https://post-phinf.pstatic.net/MjAyMDA4MjhfODMg/MDAxNTk4NjAxNDgyNzYy.jVbCv-Jkpp-qgJs3U9r9jsbzVBJ3mV5tPQcIuI8MpI4g.LN6If8Ldi4GvY_JD03QDz41FZpW3wO-kqW7AnQU54Ewg.JPEG/1189849.jpg?type=w1200",
    tags: [
      {
        tagId: 1,
        name: "매운 맛",
      },
      {
        tagId: 2,
        name: "매운 맛",
      },
      {
        tagId: 3,
        name: "매운 맛",
      },
      {
        tagId: 4,
        name: "순한 맛",
      },
    ],
  },
  {
    name: "햄버거",
    imgUrl:
      "https://post-phinf.pstatic.net/MjAxNzExMjhfNzgg/MDAxNTExODMzNTg2MDEz.Ng01xP9O0zxSQuja_QymPS89YgqGewpYLVMQRttBn8sg.zVlpj9eRm3w1z-3ung-VzjIAzXOSt8QvftivTfw155wg.JPEG/best%2Bburger%2Bgeneric.jpg?type=w1200",
    tags: [
      {
        tagId: 1,
        name: "매운 맛",
      },
      {
        tagId: 2,
        name: "매운 맛",
      },
      {
        tagId: 3,
        name: "매운 맛",
      },
      {
        tagId: 4,
        name: "순한 맛",
      },
    ],
  },
  {
    name: "갈비탕",
    imgUrl:
      "https://img-cf.kurly.com/shop/data/goodsview/20200803/gv40000025492_1.jpg",
    tags: [
      {
        tagId: 1,
        name: "매운 맛",
      },
      {
        tagId: 2,
        name: "매운 맛",
      },
      {
        tagId: 3,
        name: "매운 맛",
      },
      {
        tagId: 4,
        name: "순한 맛",
      },
    ],
  },
];

const ResultSlider = (props) => {
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                <Tag tag={item.tags} />
              </div>
            );
          })}
        </StlyedSlider>
      </Container>
    </React.Fragment>
  );
};

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
  & img {
    border-radius: 11.5rem;
    margin: 0 auto;
    width: 23rem;
    height: 23rem;
  }
`;

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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
