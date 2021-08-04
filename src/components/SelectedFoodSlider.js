import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "../image/SelectedArrowR.png";
import ArrowLeft from "../image/SelectedArrowL.png";
import XBox from "../image/xBox.svg";

const SelectedFoodSlider = (props) => {
  const settings = {
    infinite: false,
    centerPadding: "6rem",
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
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
          <FoodImgWrap>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/6b7b/7732/464039ca5fa8f4d268a61e54798418be?Expires=1628467200&Signature=UAMtlWmh3IFALK~hiTpgTROjh~nUopgEXfJRDE0nt0p4fRLgg9bpov4CMdk0t2H0mg63ALXXkRL14YgfjH2f0p-Xod22fZeuzPW~O9e4Sw8zS-ZPYkandDOYSgkbELsZAJsZnUph0frKaZ2J62WCRyShGt9r~IPPcsF5WWOKDmc8jEpnd9PDU7DVEVSTrBqjFk9NSVNTgmSWmbuwgAE~34XLsY~zj9YJsrfMQCrPogcIAel8-zsWh0~wORrUB3pot3pA~DoVqSxnpJgZGJfwHddkab8JFFlKONDldFP2nEES1-Z3JxkdoMtr-63r~NfsFhLJ0C18ZkoYTNUQgXRs2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
            <div>
              <img className="xbox" src={XBox} />
            </div>
          </FoodImgWrap>
        </StlyedSlider>
      </div>
    </React.Fragment>
  );
};

const StlyedSlider = styled(Slider)`
  width: 100%;
  padding-bottom: 1.2rem;
  margin: 0px auto;
  .slick-list {
    text-align: center;
    margin: 0px auto;
    width: 90%;
    height: 5rem;
  }
  .slick-list div {
    display: flex;
    outline: none;
    margin: 0 0.3rem 0 0;
    width: 100%;
    height: 100%;
  }
`;

const FoodImgWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  border: 0px solid #ffa012;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
  }
  & div .xbox {
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
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
        top: "0",
        right: "-2.4rem",
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
        top: "0",
        left: "-2.4rem",
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
    width: 2.5rem;
    height: 5.2rem;
  }
`;

export default SelectedFoodSlider;
