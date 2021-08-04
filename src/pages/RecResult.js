import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

import Kakao from "../image/kakao_black.png";
import Google from "../image/google_black.png";
import Facebook from "../image/facebook_black.png";

import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";



const RecResult = () => {

    return (
        <React.Fragment>
            <Grid >
                <Grid>
                    <Text size="40px" bold margin="30px 0 30px 20px">
                        오늘은 이거 어때?
                    </Text>
                </Grid>
                <ImageSlider />
                {/* 바텀 */}
                <Grid is_flex2 wrap width="auto" margin="50px 0 0 0">

                    <Text bold margin="0 0 20px 0">
                        친구와 메뉴 공유하기
                        </Text>

                    {/* sns 로고 */}
                    <Grid is_flex2 margin="0 0 50px 0">
                        <LogoK />
                        <LogoG />
                        <LogoF />
                    </Grid>


                    <Grid width="600px" is_flex2 wrap>
                        <Button1>
                            <Text color="white" bold >
                                테스트 다시하기
                        </Text>
                        </Button1>
                        <Button2>
                            <Text color="#FFA012" bold >
                                직접 검색하러 가기
                        </Text>
                        </Button2>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>

    );
};

const LogoK = styled.div`
    width: 30px;
    height: 30px;
    background-size: cover;
    background-image: url(${Kakao});
    margin: 0 10px 0 0;
    `;
const LogoG = styled.div`
width: 30px;
height: 30px;
background-size: cover;
background-image: url(${Google});
margin: 0 10px 0 0;
`;
const LogoF = styled.div`
width: 35px;
height: 35px;
background-size: cover;
background-image: url(${Facebook});
`;

// 버튼
const Button1 = styled.button`
    background-color: #FFA012;
    border:none;
    border-radius:10px;
    width:500px;
    height:70px;
    cursor:pointer;
    padding:0 auto;
    box-shadow: 2px 2px 2px gray;
`;
const Button2 = styled.button`
    background-color: white;
    border:1px solid #FFA012;
    border-radius:10px;
    width:500px;
    height:70px;
    cursor:pointer;
    padding:0 auto;
    margin:10px 0 50px 0;
    box-shadow: 2px 2px 2px gray;
`;


export default RecResult;