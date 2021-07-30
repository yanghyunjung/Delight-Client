import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

import Kakao from "../image/kakao_black.png";
import Google from "../image/google_black.png";
import Facebook from "../image/facebook_black.png";

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



                    <Grid is_flex2>
                        <Text bold>
                            원하는 결과가 아니신가요?
                    </Text>
                    </Grid>

                    <Button>
                        <Text color="white"  >
                            테스트 다시하기
                        </Text>
                    </Button>
                </Grid>




            </Grid>
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

// 테스트 다시 하기 버튼
const Button = styled.button`
    background-color: #FFA012;
    border:none;
    border-radius:30px;
    width:500px;
    height:50px;
    cursor:pointer;
    padding:0 auto;
    margin:10px 0 10px 0;
`;

export default RecResult;