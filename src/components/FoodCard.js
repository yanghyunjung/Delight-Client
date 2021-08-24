import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { addFood, deleteFood } from "../redux/modules/food";

const FoodCard = ({ data, key }) => {
  const dispatch = useDispatch();

  const foodList = useSelector((state) => state.food.selectList);

  const [activeFood, setActiveFood] = useState([]);

  const onAdd = (name, imgUrl) => {
    const food = {
      name: data.name,
      imgUrl: data.imgUrl,
      active: true,
    };
    dispatch(addFood({ name, imgUrl, food }));
  };

  const onDelete = (name, imgUrl) => {
    const food = {
      name: data.name,
      imgUrl: data.imgUrl,
      active: false,
    };
    setActiveFood(!activeFood.active);
    dispatch(deleteFood({ name, imgUrl, food }));
  };

  useEffect(() => {
    foodList.map((item) => {
      const { food, name } = item;
      if (data.name === name) {
        setActiveFood(food);
      }
    });
  }, [foodList, data.name]);

  if (activeFood.active) {
    return (
      <React.Fragment key={data.id}>
        <Container
          onClick={() => {
            onDelete(data.name, data.imgUrl);
          }}
        >
          <FoodImgWrap style={{ border: "3px solid #ffa012", opacity: "0.8" }}>
            <img src={data.imgUrl} alt={data.name} />
          </FoodImgWrap>
          <FoodNameWrap>
            <FoodName style={{ color: "#ffa012", fontWeight: "700" }}>
              {data.name}
            </FoodName>
          </FoodNameWrap>
        </Container>
      </React.Fragment>
    );
  }
  if (!activeFood.active) {
    return (
      <React.Fragment key={key}>
        <Container
          onClick={() => {
            onAdd(data.name, data.imgUrl);
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

export default React.memo(FoodCard);
