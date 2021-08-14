import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import {
  addFood,
  deleteFood,
  getFoodList,
  getFoodName,
} from "../redux/modules/food";

const FoodCard = (props) => {
  const dispatch = useDispatch();
  const foodNameList = useSelector((state) => state.food.foodName);
  const foodList = useSelector((state) => state.food.selectList);
  const [foodName, setFoodName] = useState("");
  const [alist, setAList] = useState({});
  useEffect(() => {
    setAList(foodNameList);
    foodNameList.map((item) => {
      if (props.data.name === item) {
        setFoodName(item);
      }
    });
  }, [foodNameList, alist, props.data.name]);

  if (foodName === props.data.name) {
    return (
      <React.Fragment>
        <Container
          key={props.data.id}
          onClick={({ name, list }) => {
            name = foodName;
            list = foodList;
            dispatch(deleteFood({ name, list }));
          }}
        >
          <FoodImgWrap style={{ border: "2px solid #ffa012" }}>
            <img src={props.data.imgUrl} alt={props.data.name} />
          </FoodImgWrap>
          <FoodNameWrap>
            <FoodName style={{ color: "#ffa012" }}>{props.data.name}</FoodName>
          </FoodNameWrap>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container
        id={props.data.id}
        onClick={({ name, imgUrl, select }) => {
          name = props.data.name;
          imgUrl = props.data.imgUrl;
          select = true;
          dispatch(addFood({ name, imgUrl, select }));
        }}
      >
        <FoodImgWrap>
          <img src={props.data.imgUrl} alt={props.data.name} />
        </FoodImgWrap>
        <FoodNameWrap>
          <FoodName>{props.data.name}</FoodName>
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
