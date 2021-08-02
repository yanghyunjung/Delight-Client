import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements";
import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";
import RefreshImg from "../image/Refresh.png";

const Recommand = (props) => {
  const selected = 1;
  return (
    <React.Fragment>
      <Grid width="360px" margin="0px auto" padding="20px">
        <Grid is_flex>
          <Title>최근에 뭐 먹었어요?</Title>
          <RefreshImgWrap>
            <img src={RefreshImg} />
          </RefreshImgWrap>
        </Grid>
        <p>
          총 <b>10개</b>까지 선택할 수 있어요!
        </p>
      </Grid>
      <FoodList>
        <FoodCard select={true}></FoodCard>
        <FoodCard select={true}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
        <FoodCard select={false}></FoodCard>
      </FoodList>

      <SelectedBox>
        <SelectedFoodSlider />
        <Grid width="360px" heigh="143px" margin="0px auto" padding="20px">
          {selected > 0 ? (
            <Button
              bg="#FFA012"
              border="1px solid #FFA012"
              color="#ffffff "
              radius="10px"
              width="320px"
              height="50px"
              cursor
            >
              선택완료 ( 1 / 10 )
            </Button>
          ) : (
            <Button
              bg="#C8C8C8"
              border="1px solid #C8C8C8"
              color="#ffffff "
              radius="10px"
              width="320px"
              height="50px"
              cursor
            >
              선택완료
            </Button>
          )}
        </Grid>
      </SelectedBox>
    </React.Fragment>
  );
};

const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: stretch;
  justify-content: center;
  width: 360px;
  margin: 0px auto;
  bottom: 0px;

`;

const FoodList = styled.div`
  display: grid;
  margin: 0px auto;
  justify-items: center;
  width: 320px;
  height: 70vh;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 13px;
`;

const RefreshImgWrap = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export default Recommand;
