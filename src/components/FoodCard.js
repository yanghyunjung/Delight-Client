import React from "react";
import styled, { css } from "styled-components";

const FoodCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <FoodImgWrap select={props.select}>
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
          />
        </FoodImgWrap>
        <FoodNameWrap>
          <FoodName select={props.select}>짜장면</FoodName>
        </FoodNameWrap>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80%;
  border-radius: 1rem;
  box-sizing: border-box;
  ${(props) =>
    props.select &&
    css`
      opacity: 0.8;
      border: 2px solid orange;
    `}
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
  font-size: 1.2rem;
  color: #000000;
  line-height: 1.4rem;
  word-wrap: break-word;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 0.3rem auto 0.5rem;
  ${(props) =>
    props.select &&
    css`
      color: #ffa012;
    `}
`;

export default FoodCard;
