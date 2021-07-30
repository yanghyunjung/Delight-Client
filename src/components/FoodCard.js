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
  margin: 0px auto 5px;
  cursor: pointer;
`;

const FoodNameWrap = styled.div`
  width: 70px;
`;

const FoodName = styled.div`
  width: 70px;
  text-align: center;
  overflow: hidden;
  font-weight: 500;
  font-size: 10px;
  color: #000000;
  line-height: 14px;
  word-wrap: break-word;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 3px auto 0px;
  ${(props) =>
    props.select &&
    css`
      color: #ffa012;
    `}
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  box-sizing: border-box;
  ${(props) =>
    props.select &&
    css`
      border: 2px solid #ffa012;
    `}
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }
`;

export default FoodCard;
