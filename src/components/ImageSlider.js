import React, { Component } from "react";
import styled from "styled-components";

import { Grid } from "../elements";

import Footer from "../components/Footer";

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



        }
        return (
            <React.Fragment>

                <div className="ImageSlider" style={{ padding: 40 }}>
                    <Wrap>
                        <Slider {...settings}>
                            {photos.map((photo) => {
                                return (
                                    <Grid is_flex2 width="auto" >
                                        <img width="50%" src={photo.url} />
                                    </Grid>
                                )
                            })}

                        </Slider>
                    </Wrap>
                </div>
            </React.Fragment >
        );

    }
}

const Wrap = styled.div`
    width: 100%;
    
.slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: #FFA012; // 버튼 색
    position:absolute;
    left:700%;
    font-size: 40px;
}
.slick-next:before {
    opacity:1; 
    color: #FFA012;
    position:absolute;
    right:700%;
    font-size: 40px;
}
`;

export default ImageSlider;