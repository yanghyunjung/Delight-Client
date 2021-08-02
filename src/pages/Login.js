import React from "react";
import styled from "styled-components";

import DelightLogo from "../image/DelightLogo.png";
import Google from "../image/googlelogo.png";
import Kakao from "../image/kakaologo.png";
import Facebook from "../image/facebooklogo.png";

import { Grid, Text } from "../elements";

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
                    <ButtonG>
                        <Grid is_flex2>
                            <LogoG />
                            <Text size="16px" bold text_align="center" margin="auto"> 구글로 로그인 하기</Text>
                        </Grid>
                    </ButtonG>
                    <ButtonK>
                        <Grid is_flex2>
                            <LogoK />
                            <Text size="16px" bold text_align="center" margin="auto">카카오로 로그인 하기</Text>
                        </Grid>
                    </ButtonK>
                    <ButtonF>
                        <Grid is_flex2>
                            <LogoF />
                            <Text color="white" size="16px" bold text_align="center" margin="auto">페이스북으로 로그인 하기</Text>
                        </Grid>
                    </ButtonF>
                </Grid>
            </Grid>
        </React.Fragment >
    );
};

// sns 버튼
const ButtonG = styled.button`
    background-color: #E7E7E7;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
`;
const ButtonK = styled.button`
    background-color: #FAE301;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
`;
const ButtonF = styled.button`
    background-color: #4068F4;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 50px;
    margin:10px 0 10px 0;
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