import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import Swal from "sweetalert2";

import ZeroAlert from "../image/ZeroAlert.svg";
import BobAI from "../image/BobAi.svg";

import { Grid, Button } from "../elements";
import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

import { getFoodList } from "../shared/api";

import Loader from "react-loader-spinner";
import { history } from "../redux/configureStore";

const Recommand = (props) => {
  const [foodsList, setFoodsList] = useState(null);
  const [isLoding, setIsLoding] = useState(true);

  const list = useSelector((state) => state.food.selectList);

  const handleRecommendFood = () => {
    async function getFoods() {
      const { data } = await getFoodList().then(
        setTimeout(setIsLoding, 1000, false)
      );
      setFoodsList(data);
    }
    return getFoods();
  };

  useEffect(() => {
    handleRecommendFood();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <ContentsContainer>
          <WrapContent>
            <Grid width="100%" height="15%" padding="2rem 2rem 2rem">
              <Grid is_flex height="70%" width="32rem">
                <AiImgWrap>
                  <img src={BobAI} alt="AI" />
                </AiImgWrap>
                <TitleWrap className="chat">
                  <Title>최근에 먹은 음식, 최대 10개 골라주세요!</Title>
                </TitleWrap>
              </Grid>
            </Grid>
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
            {isLoding ? (
              <RefreshButton
                disabled
                style={{
                  color: "#ffffff",
                  backgroundColor: "#ffa012",
                }}
              >
                다른 음식도 볼래요
              </RefreshButton>
            ) : (
              <RefreshButton
                onClick={() => {
                  setIsLoding(true);
                  handleRecommendFood();
                }}
              >
                다른 음식도 볼래요
              </RefreshButton>
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

const RefreshButton = styled.button`
  text-align: center;
  font-weight: 700;
  color: #ffa012;
  background-color: white;
  border: 1px solid #ffa012;
  border-radius: 1rem;
  min-width: 32rem;
  cursor: pointer;
  padding: 1.7rem 0;
  margin: 1.7rem auto 2rem;
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
`;

const FoodList = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 2rem;
  width: 90%;
  grid-template-rows: repeat(5, minmax(9rem, 9rem));
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: 0.5rem 1.3rem;
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
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  position: relative;
  top: 50%;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Container = styled.div`
  width: 100%;
  @media ${(props) => props.theme.mobile} {
  /* background-color: #ffa012; */
}
`;

const ContentsContainer = styled.div`
  width: 100%;
`;

const WrapContent = styled.div`
  margin: 0 auto 15rem;
  max-width: 36rem;
  text-align: center;
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
