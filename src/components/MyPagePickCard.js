import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getMyHistorySV, addHistory } from "../redux/modules/food";

import mypage_nodata from "../image/mypage_nodata.png";

const MyPagePickCard = ({ data }) => {
  const { createdAt, foodTag, imgUrl, name, timeType } = data;
  return (
    <React.Fragment>
      <Grid1>
        <Img src={imgUrl} />
        <span>
          {name}
          <br />
          {foodTag.map((item) => {
            return <span>{item.name}</span>;
          })}
          <br />
          {createdAt[0] + "년"}
          {createdAt[1] + "월"}
          {createdAt[2] + "일"}
          {createdAt[3] + "시"}
          {createdAt[4] + "분"}
          {createdAt[5] + "초"}
          <br />
          {timeType}
        </span>
      </Grid1>
    </React.Fragment>
  );
};

const Grid1 = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 1rem 0 1rem 0;
  width: 32rem;
  height: 8rem;
  margin: 0 2rem;
  font-size: 2rem;
  line-height: 3rem;
  color: #717171;
`;
const Grid2 = styled.div`
  display: inline;
`;

const Text = styled.div``;

const Tag = styled.div``;

const Time = styled.div``;
const Img = styled.img`
  margin: 0 2rem 0 2rem;
`;

export default MyPagePickCard;
