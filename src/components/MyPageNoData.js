import React from "react";
import styled from "styled-components";

import mypage_2 from "../image/mypage_2.png";

import { useDispatch } from "react-redux";
import { resetData } from "../redux/modules/food";
import { history } from "../redux/configureStore";

import { Text } from "../elements";


const MyPageNoData = () => {
  const dispatch = useDispatch();
  return (
    <Container>

      <Box1
        style={{
          fontSize: "1rem",
          lineHeight: "2rem",
        }}
      >
        <Text padding="2rem" color="#717171" size="1.5rem">
          회원님은 아직 데이터가 없어요!
            <br />
            지금 추천받고 기록해 보세요
        </Text>
        <Button1
          src={mypage_2}
          onClick={() => {
            dispatch(resetData());
            history.push("/recommendation");
          }}
        />
      </Box1>
    </Container>
  );
};

const Container = styled.div`
  width: 340px;  
  margin: 0 auto;
  align-items:center;
  @media ${(props) => props.theme.mobile} {
    width: 60%;
  }
  
  @media ${(props) => props.theme.mobile} {
    width: 310px;
  }
`;



const Box1 = styled.div`
  text-align:center;
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;  
  border-radius: 1.6rem;
`;

const Button1 = styled.img`
  margin: 0 auto;
  height: 4.8rem;
  cursor: pointer; 
  @media ${(props) => props.theme.mobile} {
  width: 260px;
  }
`;

export default MyPageNoData;
