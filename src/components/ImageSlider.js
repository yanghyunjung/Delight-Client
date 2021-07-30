import React, { Component } from "react";

import { Grid } from "../elements";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: "Photo 1",
        url: "https://post-phinf.pstatic.net/MjAyMDA4MjhfODMg/MDAxNTk4NjAxNDgyNzYy.jVbCv-Jkpp-qgJs3U9r9jsbzVBJ3mV5tPQcIuI8MpI4g.LN6If8Ldi4GvY_JD03QDz41FZpW3wO-kqW7AnQU54Ewg.JPEG/1189849.jpg?type=w1200"
    },
    {
        name: "Photo 2",
        url: "https://post-phinf.pstatic.net/MjAxNzExMjhfNzgg/MDAxNTExODMzNTg2MDEz.Ng01xP9O0zxSQuja_QymPS89YgqGewpYLVMQRttBn8sg.zVlpj9eRm3w1z-3ung-VzjIAzXOSt8QvftivTfw155wg.JPEG/best%2Bburger%2Bgeneric.jpg?type=w1200"
    },
    {
        name: "Photo 3",
        url: "https://img-cf.kurly.com/shop/data/goodsview/20200803/gv40000025492_1.jpg"
    },
    {
        name: "Photo 4",
        url: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/0719/IE002190922_STD.JPG"
    }
]

class ImageSlider extends Component {

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            sliderToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides",

        }
        return (
            <React.Fragment>
                <div className="ImageSlider" style={{ padding: 30 }}>
                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return (
                                <Grid is_flex2 width="100%" >

                                    <img width="70%" src={photo.url} />

                                </Grid>
                            )
                        })}

                    </Slider>
                </div>
            </React.Fragment >
        );

    }
}


export default ImageSlider;