import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import RefreshImg from "../image/Refresh.png";

import { Grid, Button } from "../elements";

import FoodCard from "../components/FoodCard";
import SelectedFoodSlider from "../components/SelectedFoodSlider";

import { addFood } from "../redux/modules/food";

const datas = [
  {
    name: "짜장면",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
];

const Recommand = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.food.list);
  return (
    <React.Fragment>
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
        {datas.map((data, idx) => {
          return (
            <FoodCard
              _onClick={({ name, imgUrl }) => {
                name = data.name;
                imgUrl = data.imgUrl;
                dispatch(addFood({ name, imgUrl }));
              }}
              data={data}
              id={idx}
            />
          );
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

export default Recommand;
