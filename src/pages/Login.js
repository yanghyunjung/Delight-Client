import React from "react";
import styled from "styled-components";

import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/googlelogo.png";
import Kakao from "../image/kakaologo.png";
import Naver from "../image/naverlogo.png";

import { Grid, Text } from "../elements";

import { GOOGLE_URL, KAKAO_URL, NAVER_URL } from '../redux/modules/oauth';



const Login = () => {
    return (
        <React.Fragment>
            <Grid is_flex2 wrap width="100%" height="10%" margin="10rem 0 0 0">
                <Grid is_flex2 margin="0 0 5rem 0">
                    <img src={DelightLogo} />
                </Grid>

                <Grid is_flex2 margin="0 0 1rem 0">
                    <Text size="1.6rem" bold>
                        당신에게 만족스러운<br /><br />한끼의 기쁨을 드려요
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
                            <LogoN />
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
    border-radius:3rem;
    width:50rem;
    height:6rem;
    cursor:pointer;
    padding:0 1rem 0 5rem;
    margin:1rem 0 1rem 0;
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
    background-color: #03C75A;
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
const LogoN = styled.div`
width: 30px;
height: 30px;
background-size: cover;
background-image: url(${Naver});
`;





export default Login;