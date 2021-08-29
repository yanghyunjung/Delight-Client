import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import Swal from "sweetalert2";

import ZeroAlert from "../image/ZeroAlert.svg";
import BobAI from "../image/BobAi.svg";

import { Grid, Button } from "../elements";
import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

import { getFoodList, getFoodListSV } from "../shared/api";

import Loader from "react-loader-spinner";
import { history } from "../redux/configureStore";

const category = [
  { id: 1, country: "한식" },
  { id: 2, country: "일식" },
  { id: 3, country: "중식" },
  { id: 4, country: "양식" },
  { id: 6, country: "분식" },
];

const Recommand = (props) => {
  const [foodsList, setFoodsList] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [selectCategory, setSelectCategory] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const list = useSelector((state) => state.food.selectList);

  const handleRecommendFood = (categoryId) => {
    async function getFoods() {
      const { data } = await getFoodListSV(categoryId).then(
        setTimeout(setIsLoding, 1000, false)
      );
      setSelectCategory(true);
      setFoodsList(data);
    }
    return getFoods();
  };

  useEffect(() => {
    handleRecommendFood(1);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <ContentsContainer>
          <WrapContent>
            <Wrap>
              <Inner>
                <AiImgWrap>
                  <img src={BobAI} alt="AI" />
                </AiImgWrap>
                <TitleWrap className="chat">
                  <Title>최근에 먹은 음식, 최대 10개 골라주세요!</Title>
                </TitleWrap>
              </Inner>
            </Wrap>
            <FlexBox>
              {category &&
                category.map((i, index) => {
                  return (
                    <CategoryName
                      key={i.id}
                      current={index === categoryId}
                      onClick={() => {
                        setIsLoding(true);
                        setCategoryId(index);
                        handleRecommendFood(i.id);
                      }}
                    >
                      {i.country}
                    </CategoryName>
                  );
                })}
            </FlexBox>
            {isLoding ? (
              <WrapLoader>
                <StyledLoader
                  type="Oval"
                  color="#ffa012"
                  height={30}
                  width={50}
                />
              </WrapLoader>
            ) : (
              <FoodList>
                {foodsList &&
                  foodsList.map((data, idx) => {
                    return <FoodCard data={data} key={idx} />;
                  })}
              </FoodList>
            )}
          </WrapContent>

          <WrapBottomBox>
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
                      history.replace("/recommendation/spinner");
                    }}
                  >
                    다 골랐어요! ( {list.length} / 10 )
                  </Button>
                ) : (
                  <Button
                    bg="#C8C8C8"
                    border="1px solid #C8C8C8"
                    color="#ffffff "
                    radius="1rem"
                    width="100%"
                    height="5rem"
                    _onClick={() =>
                      Swal.fire({
                        width: 240,
                        padding: "0 0 20px 0",
                        title: `음식을 골라주세요!`,
                        imageUrl: ZeroAlert,
                        imageWidth: 240,
                        imageHeight: 100,
                        imageAlt: "음식을 골라주세요",
                        showConfirmButton: false,
                        timer: 1500,
                      })
                    }
                  >
                    골라주세요~!
                  </Button>
                )}
              </Grid>
            </SelectedBox>
          </WrapBottomBox>
        </ContentsContainer>
      </Container>
    </React.Fragment>
  );
};

const CategoryName = styled.div`
  font-size: 1.6rem;
  padding: 0.7rem 1.3rem 0.4rem;
  margin: 0 0 1.8rem 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${(props) => (props.current ? "#ffffff" : "gray")};
  background-color: ${(props) => (props.current ? "#ffa012" : "")};
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1rem;
`;

const Wrap = styled.div`
  width: 100%;
  height: 15%;
  padding: 2rem 2rem 2rem;
  @media ${(props) => props.theme.mobile} {
    width: 90vw;
    padding: 2vh 5vw;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${(props) => props.theme.mobile} {
    width: 94%;
    padding: 0 0rem 0 0;
  }
`;

const Slideup = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const WrapLoader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 32rem;
  height: 50vh;
`;

const StyledLoader = styled(Loader)`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const SelectedBox = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 36rem;
  background-color: #f4f0ea;
  padding: 1.4rem 2rem;
  box-shadow: 0 -0.4rem 0.4rem 0 rgba(0, 0, 0, 0.1);
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    left: 0;
  }
`;

const FoodList = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 2rem;
  width: 90%;
  grid-auto-rows: minmax(90px, 90px);
  grid-template-columns: repeat(auto-fill, minmax(70px, auto));
  gap: 0.5rem 1.3rem;
  @media ${(props) => props.theme.mobile} {
    width: 90vw;
    padding: 0 5vw;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

const AiImgWrap = styled.div`
  padding: 0.4rem 0 0 0;
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Container = styled.div`
  width: 100%;
  @media ${(props) => props.theme.mobile} {
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
`;

const WrapContent = styled.div`
  margin: 0 auto 15rem;
  width: 36rem;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const WrapBottomBox = styled.div`
  margin: 0 auto;
  max-width: 36rem;
`;

const TitleWrap = styled.div`
  border-radius: 2rem;
  padding: 1.5rem;
  background-color: #f6f6f6;
  opacity: 0;
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
  @media ${(props) => props.theme.mobile} {
    margin: 0 0 0 1rem;
    width: 80vw;
  }
  &.chat {
    position: relative;
    background: #f6f6f6;
    border-radius: 0.8rem;
  }
  &.chat:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #f6f6f6;
    border-left: 0;
    margin-top: -10px;
    margin-left: -5px;
  }
`;

export default Recommand;
