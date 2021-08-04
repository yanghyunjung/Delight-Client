import React, { Component } from "react";
import styled from "styled-components";

import { Grid } from "../elements";

import Footer from "../components/Footer";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: "1위 떡볶이",
        url: "https://post-phinf.pstatic.net/MjAyMDA4MjhfODMg/MDAxNTk4NjAxNDgyNzYy.jVbCv-Jkpp-qgJs3U9r9jsbzVBJ3mV5tPQcIuI8MpI4g.LN6If8Ldi4GvY_JD03QDz41FZpW3wO-kqW7AnQU54Ewg.JPEG/1189849.jpg?type=w1200"
    },
    {
        name: "2위 햄버거",
        url: "https://post-phinf.pstatic.net/MjAxNzExMjhfNzgg/MDAxNTExODMzNTg2MDEz.Ng01xP9O0zxSQuja_QymPS89YgqGewpYLVMQRttBn8sg.zVlpj9eRm3w1z-3ung-VzjIAzXOSt8QvftivTfw155wg.JPEG/best%2Bburger%2Bgeneric.jpg?type=w1200"
    },
    {
        name: "3위 갈비탕",
        url: "https://img-cf.kurly.com/shop/data/goodsview/20200803/gv40000025492_1.jpg"
    },
    {
        name: "4위 삼겹살",
        url: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/0719/IE002190922_STD.JPG"
    }
]

class ImageSlider extends Component {

    render() {
        const settings = {
            dots: true, //진행상황 
            fade: true,
            infinte: true,  //무한으로 넘기게 해주세요
            speed: 500,
            sliderToShow: 2,    //1장씩 보이게 해주세요
            arrows: true,   // 넌 왜 안보이냐
            slidesToScroll: 1,  //1장씩 넘기세요
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,




        }
        return (
            <React.Fragment>

                <div className="ImageSlider" style={{ padding: 40 }}>

                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return (
                                <Grid is_flex2 width="auto" >
                                    <img width="50%" src={photo.url} />
                                </Grid>
                            )
                        })}

                    </Slider>

                </div>
            </React.Fragment >
        );

    }
}

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
                top: "-5px",
                right: "0px",
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
                top: "-5px",
                left: "0px",
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

export default ImageSlider;