import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";

const SelectedFoodSlider = (props) => {
  const settings = {
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <React.Fragment>
      <div>
        <StlyedSlider {...settings}>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </FoodImgWrap>
        </StlyedSlider>
      </div>
    </React.Fragment>
  );
};

SelectedFoodSlider.defaultProps = {
  url: "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  selected: false,
};

const StlyedSlider = styled(Slider)`
  position: relative;
  width: 360px;
  margin: 0px auto;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    max-width: 280px;
    height: 50px;
  }
  .slick-list div {
    outline: none;
    margin: 0px 2px 0px 0px;
  }
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid #ffa012;
  & img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

function SampleNextArrow(props) {
  const { style, onClick } = props;
  if (onClick === null) {
    return "";
  }
  return (
    <ArrowWrap
      style={{
        ...style,
        position: "absolute",
        top: "-5px",
        right: "0px",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="오른쪽 화살표" />
    </ArrowWrap>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  if (onClick === null) {
    return "";
  }
  return (
    <ArrowWrap
      style={{
        ...style,
        position: "absolute",
        top: "-5px",
        left: "0px",
        zIndex: 9996,
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="왼쪽 화살표" />
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
  & img {
    width: 25px;
    height: 50px;
  }
`;

export default SelectedFoodSlider;
