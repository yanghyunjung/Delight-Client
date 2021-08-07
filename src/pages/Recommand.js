import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import RefreshImg from "../image/Refresh.png";

import { Grid, Button } from "../elements";

import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

import { addFood } from "../redux/modules/food";

import { sendSelectFood } from "../redux/modules/food";

import { getFoodList } from "../shared/api";

const datas = [
  {
    name: "짜장면",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1629676800&Signature=GbZ66phN0BuBrXMh1QqTeliDZLOhqkSqoN47FurOeJPPpYPI94JJepDj4oc2cVkJlE~qoFZq8aKDm8HTVfr6kO0G~VhdgN2MQlsIuuRSgivaD7i9ypuhnrP9E0d6sJtEl85Vlr2MW397lR-TshB8cpJm-PBKOkkwWsN3xW3H9In9bzjhYriKKXPZ74qrytoD~yqvx1qKVHUcjtpn0Br07GOTMZCdaifeXsJ~TcYz--mkSdgv3ozfSdEfN0riMGzH0myMckL74g94rhJGOX89LkCWPmRxQmN2JZ1WM5P9h6mdqx7108BMmZg6Hg0LCBiopSAk9hQAMQSxIXhSUSrBrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "햄버거",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7be4/3f10/8b7ba304ca81d5939e554d8389bf3920?Expires=1629072000&Signature=AqhUttl5wAXlzecmJhN4lMGGK7kyW820F2sqMNtWQnIS9SLhgz63ZK0Zb0ux3tmtFl3AMllBgsVGcbr5QzKlTJLuVP2wItN-G7QThIZ75jE6KEIscC1GEaIcGy4XIkpozzxqbVVk~Nub8IIA4CUlzTq2khqTFkmHGepFGW7JSFE~qSfkoRPbxRYkjTB096svCEuzULYyCr1Bh~LVmYzOIrp636Xa8tYzFMinZhZioN-Xaa5q-GU8WdTlQa7BPZmQIbHTRI~LHBZ1XAxpQr34XRNPWDTyPdRfXYfj299FRvGUWzlnS64am2gus29gpllClrRk-JBr3V5dBhksQRbGUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "초밥",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/608c/fb29/12e90d5b1ac35126fa6f7ff4804b33ad?Expires=1629072000&Signature=aJCEoKCXO17iR424HtGT2TFVjsjLcx~rRMnknEDWwcfdnPOHN0vHeG71GEPFDIMOjtsabbCmJnPZMz2G4HrMusi4kAiasNzbnItwtfWjo4XBbbRJ7r~sBQlL9O8q-deewYRorRZ9vWGZdN5QF9rzTVdnLyVCx-PfSRAtrMiAc1LexiUaJVIQHfFHBz5jvwBlcAQ2SP67C4Uf7hgjGRMgZjwYHYHE5lwqFPp43QLYlknQJyMrOgBTpmgCsJjfCQmJ2v4rd3LDRmVjIMgxzWMQP7PhJuVeX3nhTTeu8n2wIKIGaOvwX1f1MPBd4wL7nrUadPO~0eZorcYTqwKNZoZDBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "김치나베돈까스",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/deca/f491/a5121af90f95bc5502090465dd78409d?Expires=1629072000&Signature=Ubc-VfrxiF16LGqgxxx1iVHsMqfoohc9gZcV-QtpM1rBqVukEvLxej~HjVoIJE~P1mnS1DJaxrfBBBXGIyonaExO8pFQnmZcFVDqnTZAtGV9HOrYO8B53zS2frT3miY4OuuMQWoX70DRLgTPiW1Cgi79e5u4cUpR3PeThC3u580CM8Vhqd9dM~jhy4OrPQ4eZdMM2VnOjHWpwTEYavvk0rMDGzWS7q1NYNeVKe3vpkGv3CVebU4H47o60fFFK1KNCmilFvLBZgpYShS7ja~rCpFYtosdIktFhLTNltkHW3Q-QuHlmziF2aFE8pZHZet5EedXcklMlufdFdlSVdFH6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "삼겹살",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/9c16/eb41/026c02e4610942b4d5f3146293c1ddc2?Expires=1629072000&Signature=R~7Gjbip~4yeK94ozHrJoIwA1-RDCvfaOsVfeZvoE4UvgzEzIUXafFHiBPKv~tCXh9NDDGU03-CbWbXUd6IpCRNkiWa~~hDQ~Ii~2SSBVqxlmAebl-1JCWNVfLEAq6fcbvLjsliPJ2fp0YPI62UfzCzBBRvKXKTUIiXg4oY6n6r7AVy1gnA3-PZGDfEbE1wHsda5F5s8JgTWYQvQwZeV0aKYHIaL73lFYPkP9KSmqM3KdeXYTAooJTCWrMQLDvit6OULlNnaIDV8Pu~4qdmhcrz2bX12yGUWq7gl8~HCy4XJ3WT8n-dP~t3cqkcQQxWsDOujH6zOgwCYBBl85hAD4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "쌀국수",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/9b22/cd78/3b968115990541c22cba569d94873cfd?Expires=1629072000&Signature=DNsqrglF-ycsaKDR5nrWoPABkep9cReUn0ooKIbnXdBRBCDGJQ8mKuNLufR-fMUZgaw~vqHu64EEMXjorDv0AflYOWPwqePCWQK~LcAz1xgfFnKZhVRzwMLmWoJcB1wv~3bVVpf1dr5zx8gO7TyvmZAdxtYD-v2z9MB-ZaDFIP9icLKNkhnRGORSEjmEVw-xRwDCbLByVAe3XFwdsnqJLKefofQOa~ylsz2DqZDSas-3jg4hli~10cxI9rBRK~freEez29q~LaMnqJM0sjz9bswxtbYH8OP1AnYVE8MEaNibeoGZYO5OtCVPrqhFPq7jgKmqSTvEForeK80i-KTaLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "마라샹궈",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/48f0/7e74/8793cd5a0fa3aaa9fab2ee03f57759bd?Expires=1629072000&Signature=Uj-Nn6yDxxp6x0rr7kIniXhvCjv-Ns7L3FU1FsKOXE6Mg-J0utlQGdKxi1S80aI6MXvnWWWl~uBAE-pae3TS0NIQQ41oY~9WXrXygzM1Kqh2Usq3uj3bWEoGwbNH-toaAsnb~nuGOtgF2c~OKWIiZeeQFJcOXjxdZJjScB7qcxeUd7cQm2NTahd7iIFdG8xaVUdkwb5W4-YzRSMGyxb9tERqvbnDndbwTBfkTc6DekWmhoFzHngLXTSbOsOHS5qwZNT1tQ0WLAYAziJdJDGN3qo1r-671jgonJQQ0Q~EUt7HvhtV2oNHIO6KJCA27ddQ5uqDMCQ~2I3Oc3TQrfKZ5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "갈비찜",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/3afd/6268/1c6d17679a66e7177f9bf5185da1ce8e?Expires=1629072000&Signature=g7okrF0~8tOLQW3jyIqwO3Tzg29upe09M0OMAolq3AAf1Lr1W3QsGQvR3bBwLMW2zgzl7wCj6pSqcDI8vgZIQ-g1-kSbvBVJkZ7TQUuYhKXysSduOxSRH1QyeusyUse8k3o0HDm7zEvZeDPe9XEUQC8kYnTnLnhnCThZnsuYplV5XSbAunvenFdcAjzo03~t0y3i681rz-AKzcRr83PHoVgaU6wB9RORgPUDwoLJ7975jwLjDmNB1OXuKL6Pt1lLrDC-YH~gP1om5wXTOOJvfR7Y5nsT0NF1FA~6NpclRlo1olpdyByFkx2riEi-XhzytqC3lpWBn8z67dez8-InfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "알리오올리오",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7aa5/81e8/de2e30ce8ffbbf6bef3d62f916e9aca2?Expires=1629072000&Signature=eX2Oq2BphvFOK9b~85MXD4dwHar4MgUeCJkHUYeQq6CmbdMW7NxsEJTa-hjR9RJjvZDUICF0FMG1Kyd9v5lkqpt~n7RGHnpu4F9yjGk59or-ke-nlLzN-j6n8IxXWYyWqZ8ao2mRBiWYhOWzrfNys1uLtheN7vfbdxkkiuJMJGpOxSFkYmS00ako~o0TbdB0sYjehFJj3JZM6zgg~SbVrF~nXNsURiGqOlqo4ZVeTZdaYQf4jHMPfG9KfOfOha4l9-jGl7L032W9aymJ6xSCru9-Oddhsqe2yGYpWQHfv9f6LdGenh6iwWrkOXnl4aY1mjP4kPTK4uFpJvfWWvuozw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "탕수육",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/312b/89b0/32aead0327308d2e6fd8f5626382a791?Expires=1629072000&Signature=SxRD9ci1R6rA85UNvxPFfqYd8S1b9w3NbxS251SmqrqJsoyYi6u~VNZtVnzBTPaxaaW4deSaZ~wZhDTBIDab1YSknI0am26ZIxLzYiSEwD8JQrAI~IJ3Q-SJfNZ1qcT6Ss2-OzJnt9mlTYmLeDKW7hVP7ictGY~ixUFZCAs-eGBB4D2PFw7qwe09GAMhK6TY9hc6R486Baf8df2G6qxv71l-qTLwe6d76JaKXazn2btOw6vQn9ljP1~FRe3Yi9C0VRXFMDMew63NDouPzTXLHSsrLpThgOR2DEvf91E3dBMarMD9Dp5R4J01KhDMU6o9qkV4HNd55vzKPp1e7ucZbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "청국장",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/a266/f45b/ff7bae9f38dfd83ac5309680d22ba7eb?Expires=1629072000&Signature=GNeZiJ8N8GiVEIrR0x~uA0UckEb4-pTWXKo05XAgJTM3uR8xpjC471~pQFYsY1GeYYkY6DHMorI-5fqiqqPpVGRfwaxfvmDrc7TaTWqYA-uOch2S20pKoXN7aa6yY04jU7K1W3qdtBHMa02wTsanzX-pSSFXgXFLeV-FynxwMWolQ3wrgk1hmwLPtQLbLSWUuhtzn-HaSBCR7DDNNxLmcZ96AviY2~Xn2xY~ZAI3z481RssctPOi8DZ44XEs~1TJZw0LsMF1QFepe4cZxh9Zm~SNeFHYn4EpP989gKKSxiosDnmH6~8Y2ABczFcSZhmV7ETQ0ryaYLsBEz3M2VmbdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "된장찌개",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/44b2/228f/5f5185d7b596e5a3ad2cba8d4d96c06b?Expires=1629072000&Signature=DNkZ1czMq~5hXiVZTML0bMkeBTzQvyHaEoK~78Ns9Uo8gY0rrjKLsg5rq74Ml9DQW3va3SHAQREUBwbhb-5lQk~81Bu0UxqmUk~WgNM1nG3t8dR2E29BeboSd8PzNiKQTpiAdVYA6VzHePPc5t-u3HVU6c9z2GurStlZ-SFmA6RgMZVo4CItPVl7eMEem6V1JKktcU4GTbFkSHD66rCtbAK36XunB-be9MtJJbXxxPV~lhgU0bTuKUfStZVz2MC4znOps9Ob4YJGHGRN8Z8Fikmq31123cFlnuWtRwDBniljsndu5PVsvHyojklue1dMLzudRkcn2mrTtQkGIJgPaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "샌드위치",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/f274/c037/209722d8a478e617e059dc842b68fc9a?Expires=1629072000&Signature=JpVgzpT35fBYdrhoC5Zk6ZFiBUWQnewMgIo-vYO0a2LI8~Xvx7kEjQ4ja1j0OVPkddxFtqwB0JVpVUG35kuvuwXPtHUdXUczfCwV9hC8olPhd-hTC~qZ0m3NU3boYqnvCV2Jdq0T4nLZlrne9KSrT3hWNa2wS7TnDOjbFqAY8XhrHNhrzcoN7oT4B1GmSB5nLspb6zPVjgLfOcofpRfB~uDTxYGAyLS9a~Nig9~wUXOmZ7SEagYPSKF5768nATvHdYeC7Jkl9xiCK511pY0djp9zzWqsfN9zQ43iZy5DqPbM3jfiz2S99EqP6PMRgbypHluWcCzIirvswEixkc50TQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "잔치국수",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/bd2e/ff87/9d170c3253b9dcb424edbef65dfd2a2a?Expires=1629072000&Signature=XxlAb2tkkJglP2eQyrsp3LdhhMXDRP~seSuyHp0PAQ1~QJOt096SVnLDx1oV5mLtymaQp1HooYuIi-~yOR73JZRzCY9tL4-pzQla20EMFvbZU0qbp0cuk2D0KCtQ6WT4w0DpyhsEvrubYBRJ1S2Cutia3jdwz9joMvLfozbaQX8876xzPpEX-xIhnnNbJp0Ok-jQfLMgDep0PxyPa5Y4MTeJcjWdON6CKlbOiVsJJr1lNb9hURJqhoz5WcHR91HdGGgo~u4v~nvJX0rMT4Ahqh3Ur761pb8fzX1-GYw5V~Mzbomq710zXHiT54fv-nrLPdYVIzwngJ8Iknc3RXALKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "돈코츠라멘",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b595/b1b3/12f4d7b28a5bb8b0193d02cdf4d7ec84?Expires=1629072000&Signature=ToZKRBmeVdE5P0GQtCCtphDCvW8aC~TqHETzkozuO5sgvPNjLXOCB3vv8p1b3bvtkPuPZYRPcnqrexjufDMZOVyjLQV6JhMEQG~4bnZoPEuyt0GwgocetSqShv~2mm9oQeauHOha~0DJv97UMaFcrc3-PoyOOciREoWXZhPoz8N9u013Z74-HFzi7veXivLyv2vAzsAz2xhshur5FFy-x8vzwO2gVIz8jzCWXqOEMBTJKl6k9L4Qvr9QMocd4ywPq1HaGIEttOgZAtDZ5OMs7VILEpu2mDhsYnkRc4NNQELqlnwc1RRHp8VgVJoDz28Uu0hYFtDGE1vq1yTTFoIjww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    name: "가츠동",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b742/dde6/80dfcdbcc74fd380ad03860af4b07426?Expires=1629072000&Signature=YWPbAEhQtdznsFnFYcvnJIxlcUSnn0UdrVSJj4rh1sICncqcvy~pzZtqu7-SE5mvSyfmkMwOGoMVHe1FH69a4Kra77k8yFtEotjpRxMJx9jmby3rmMGysP9W92jTxDyudp3gP1K9bUTuyoqpNHnwTb3o8qQYKwWhvcSQBPDJXG~TJLdnFcCWr-yr~~aUJjLiujsuYK8pApQj6tUN5F~SXoE2pDJQx1uo3hp1l7gLIHMrctmbZfNzxUA~E3DMa9o10N4cMT6sIe3iBcba4YDqyzHzszFAE6xLEcConHTVKHLoHbp2NwZlNVH6uQgE1kEXb165YMmzeKYeT1MNVoxzpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

const Recommand = (props) => {
  const dispatch = useDispatch();

  const [selectedFood, setSelectedFood] = useState([]);
  const [foods, setFoods] = useState([]);

  const list = useSelector((state) => state.food.list);
  const foodNameList = useSelector((state) => state.food.foodName);

  const sendSelectedFood = () => {
    setSelectedFood(foodNameList);
    return dispatch(sendSelectFood(selectedFood));
  };

  useEffect(() => {
    async function getFoods() {
      const { data } = await getFoodList();
      setFoods(data);
      console.log("zcxz", data);
    }
    return getFoods();
  }, []);

  console.log("asd", foods);

  return (
    <React.Fragment>
      <Container>
        <ContentsContainer>
          <Grid width="100%" height="15%" padding="2rem 5% 2.5rem">
            <Grid is_flex height="70%">
              <Title>최근에 뭐 먹었어요?</Title>
              <RefreshImgWrap>
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
            {foods.map((data, idx) => {
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
