import React from "react";
import styled from "styled-components";

import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/googlelogo.png";
import Kakao from "../image/kakaologo.png";
import Facebook from "../image/facebooklogo.png";

import { Grid, Text } from "../elements";

import { GOOGLE_URL, KAKAO_URL, NAVER_URL } from '../redux/modules/oauth';



const Login = () => {




    return (
        <React.Fragment>
            <Grid is_flex2 wrap width="100%" margin="150px 0 0 0">
                <Grid is_flex2 margin="0 0 50px 0">
                    <img src={DelightLogo} />
                </Grid>

                <Grid is_flex2 margin="0 0 20px 0">
                    <Text size="16px" bold>
                        당신에게 만족스러운<br />한끼의 기쁨을 드려요
                </Text>
                </Grid>

                {/* 로그인 버튼 */}
                <Grid is_flex2 wrap width="500px" >
                    <ButtonG href={GOOGLE_URL}>
                        <Grid is_flex2>
                            <LogoG />
                            <Text size="16px" bold text_align="center" margin="auto"> 구글 1초 로그인 </Text>
                        </Grid>
                    </ButtonG>

                    <ButtonK href={KAKAO_URL}>
                        <Grid is_flex2>
                            <LogoK />
                            <Text size="16px" bold text_align="center" margin="auto">카카오 1초 로그인</Text>
                        </Grid>
                    </ButtonK>

                    <ButtonN href={NAVER_URL}>
                        <Grid is_flex2>
                            <LogoF />
                            <Text color="white" size="16px" bold text_align="center" margin="auto">네이버 1초 로그인</Text>
                        </Grid>
                    </ButtonN>
                </Grid>
            </Grid>
        </React.Fragment >
    );
};

// sns 버튼
const ButtonG = styled.a`
    background-color: #E7E7E7;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
    text-decoration: none;
`;
const ButtonK = styled.a`
    background-color: #FAE301;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
    text-decoration: none;
`;
const ButtonN = styled.a`
    background-color: #4068F4;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
    text-decoration: none;
`;


// sns 로고
const LogoG = styled.div`
width: 30px;
height: 30px;
background-size: cover;
background-image: url(${Google});
`;
const LogoK = styled.div`
width: 30px;
height: 30px;
background-size: cover;
background-image: url(${Kakao});
`;
const LogoF = styled.div`
width: 30px;
height: 30px;
background-size: cover;
background-image: url(${Facebook});
`;





export default Login;