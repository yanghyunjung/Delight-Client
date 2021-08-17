import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import {
  addFood,
  deleteFood,
  getFoodList,
  getFoodName,
} from "../redux/modules/food";

const FoodCard = ({ data, id, check, setCheck }) => {
  const dispatch = useDispatch();

  const foodNameList = useSelector((state) => state.food.foodName);
  const foodList = useSelector((state) => state.food.selectList);

  const [foodName, setFoodName] = useState("");

  useEffect(() => {
    foodNameList.map((item) => {
      if (data.name === item) {
        setFoodName(item);
      }
    });
  }, [foodNameList, data.name]);

  if (foodName === data.name) {
    return (
      <React.Fragment>
        <Container
          key={data.id}
          onClick={({ name, list }) => {
            name = foodName;
            list = foodList;
            dispatch(deleteFood({ name, list }));
            setCheck(false);
          }}
        >
          <FoodImgWrap>
            <img src={data.imgUrl} alt={data.name} />
          </FoodImgWrap>
          <FoodNameWrap>
            <FoodName>{data.name}</FoodName>
          </FoodNameWrap>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container
        id={data.id}
        onClick={({ name, imgUrl }) => {
          name = data.name;
          imgUrl = data.imgUrl;
          dispatch(addFood({ name, imgUrl }));
          setCheck(true);
        }}
      >
        <FoodImgWrap>
          <img src={data.imgUrl} alt={data.name} />
        </FoodImgWrap>
        <FoodNameWrap>
          <FoodName>{data.name}</FoodName>
        </FoodNameWrap>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
`;

const FoodImgWrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 80%;
  border-radius: 1rem;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const FoodNameWrap = styled.div`
  width: 100%;
  height: 20%;
`;

const FoodName = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  font-weight: 500;
  font-size: 1em;
  color: #000000;
  line-height: 1.5rem;
  box-sizing: border-box;
  margin: 0.3rem auto 0.5rem;
`;

export default FoodCard;
