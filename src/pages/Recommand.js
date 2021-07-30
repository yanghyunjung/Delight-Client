import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements";
import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

const Recommand = (props) => {
  return (
    <React.Fragment>
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

      <SelectedFoodSlider></SelectedFoodSlider>

      <Grid width="360px" heigh="143px" margin="0px auto" padding="20px">
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
      </Grid>
    </React.Fragment>
  );
};

const FoodList = styled.div`
  display: grid;
  margin: 0px auto;
  justify-items: center;
  width: 320px;
  height: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 13px;
`;

export default Recommand;
