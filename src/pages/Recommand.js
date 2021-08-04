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
      <Grid width="100%" height="15%" padding="2rem 5% 2.5rem">
        <Grid is_flex height="70%">
          <Title>최근에 뭐 먹었어요?</Title>
          <RefreshImgWrap>
            <img src={RefreshImg} />
          </RefreshImgWrap>
        </Grid>
        <Wrap>
          <SubTitle>
            총 <Span>10개</Span>까지 선택할 수 있어요!
          </SubTitle>
        </Wrap>
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
        <Grid margin="0 auto">
          {selected > 0 ? (
            <Button
              bg="#FFA012"
              border="1px solid #FFA012"
              color="#ffffff "
              radius="1rem"
              width="100%"
              height="5rem"
              cursor
            >
              선택완료 ( 1 / 10 )
            </Button>
          ) : (
            <Button
              bg="#C8C8C8"
              border="1px solid #C8C8C8"
              color="#ffffff "
              radius="1rem"
              width="100%"
              height="5rem"
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
  align-items: stretch;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  background-color: #f4f0ea;
  padding: 1.4rem 2rem;
  box-shadow: 0 -0.4rem 0.4rem 0 rgba(0, 0, 0, 0.1);
`;

const FoodList = styled.div`
  display: grid;
  justify-items: center;
  margin: 0rem 0rem 2.5rem 0rem;
  padding: 0 5%;
  width: 90%;
  height: 100%;
  grid-template-columns: repeat(4, minmax(20%, auto));
  gap: 0.5rem 1.3rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RefreshImgWrap = styled.div`
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
`;

const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30%;
`;

export default Recommand;
