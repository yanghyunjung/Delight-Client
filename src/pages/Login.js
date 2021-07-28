import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";

const Login = () => {
    return (
        <React.Fragment>
            <Grid is_flex2 wrap width="100%" flexdirection>

                <Grid is_flex2>
                    딜라이트 이미지 자리
                </Grid>

                <Grid is_flex2>
                    <Text size="16px" bold>
                        당신에게 만족스러운<br />한끼의 기쁨을 드려요
                </Text>

                </Grid>


                <Button1>
                    <Text size="16px" bold text_align="center" margin="auto">구글로 로그인 하기</Text>
                </Button1>
                <Button2>
                    <Text size="16px" bold text_align="center" margin="auto">카카오로 로그인 하기</Text>
                </Button2>
                <Button3>
                    <Text color="white" size="16px" bold text_align="center" margin="auto">페이스북으로 로그인 하기</Text>
                </Button3>
            </Grid>
        </React.Fragment >
    );
};

const Button1 = styled.button`
    background-color: #E7E7E7;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 10px;
    margin:10px 0 10px 0;
`;
const Button2 = styled.button`
    background-color: #FAE301;
    border:none;
    color:#ffffff;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 10px;
    margin:10px 0 10px 0;
`;
const Button3 = styled.button`
    background-color: #4068F4;
    border:none;
    color: white;
    border-radius:30px;
    width:500px;
    height:60px;
    cursor:pointer;
    padding:0 10px 0 10px;
    margin:10px 0 10px 0;
`;



export default Login;