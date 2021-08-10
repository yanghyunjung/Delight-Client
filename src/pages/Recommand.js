import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import RefreshImg from "../image/Refresh.png";

import { Grid, Button } from "../elements";

import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

import { sendSelectFoodSV } from "../redux/modules/food";

import { getFoodList } from "../shared/api";

const Recommand = (props) => {
  const dispatch = useDispatch();

  const [selectedFood, setSelectedFood] = useState([]);
  const [foodsList, setFoodsList] = useState([]);

  const list = useSelector((state) => state.food.selectList);
  const foods = useSelector((state) => state.food.foodName);

  const sendSelectedFood = () => {
    dispatch(sendSelectFoodSV(selectedFood));
  };

  const handleRecommendFood = () => {
    async function getFoods() {
      const { data } = await getFoodList();
      setFoodsList(data);
    }
    return getFoods();
  };

  useEffect(() => {
    handleRecommendFood();
  }, []);

  useEffect(() => {
    setSelectedFood({ foods });
  }, [foods]);

  return (
    <React.Fragment>
      <Container>
        <ContentsContainer>
          <Grid width="100%" height="15%" padding="2rem 5% 2.5rem">
            <Grid is_flex height="70%">
              <Title>최근에 뭐 먹었어요?</Title>
              <RefreshImgWrap
                onClikc={() => {
                  handleRecommendFood();
                }}
              >
                <img src={RefreshImg} alt="refresh" />
              </RefreshImgWrap>
            </Grid>
            <Wrap>
              <SubTitle>
                총 <Span>10개</Span>까지 선택할 수 있어요!
              </SubTitle>
            </Wrap>
          </Grid>
          <FoodList>
            {foodsList.map((data, idx) => {
              return <FoodCard data={data} id={idx} />;
            })}
          </FoodList>

          <SelectedBox>
            <SelectedFoodSlider />
            <Grid margin="0 auto">
              {list.length > 0 ? (
                <Button
                  bg="#FFA012"
                  border="1px solid #FFA012"
                  color="#ffffff "
                  radius="1rem"
                  width="100%"
                  height="5rem"
                  cursor
                  _onClick={() => {
                    sendSelectedFood();
                  }}
                >
                  선택완료 ( {list.length} / 10 )
                </Button>
              ) : (
                <Button
                  bg="#C8C8C8"
                  border="1px solid #C8C8C8"
                  color="#ffffff "
                  radius="1rem"
                  width="100%"
                  height="5rem"
                  _onClick={() => alert("음식을 선택해주세요")}
                >
                  선택완료
                </Button>
              )}
            </Grid>
          </SelectedBox>
        </ContentsContainer>
      </Container>
    </React.Fragment>
  );
};

const SelectedBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 142px;
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
  grid-template-columns: repeat(4, minmax(5em, auto));
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

const Container = styled.div`
  width: 100%;
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding-bottom: 142px;
`;

export default Recommand;
