import React from "react";

import styled from "styled-components";

const MyPagePickCard = ({ data }) => {
  const { createdAt, foodTag, imgUrl, name, timeType } = data;

  return (
    <React.Fragment>
      <Column>
        <ImgWrap>
          <img src={imgUrl} alt="tags" />
        </ImgWrap>
        <Box1>
          <Grid1>
            <Title>{name}</Title>

            <TimeType>{timeType}</TimeType>
          </Grid1>
          <br />
          <TagGrid>
            {foodTag.map((tag) => {
              return <TagName>{`# ` + tag.name}</TagName>;
            })}
          </TagGrid>
          <Time>
            {createdAt[0] + "년"}&nbsp;
            {createdAt[1] + "월"}&nbsp;
            {createdAt[2] + "일"}&nbsp;
            {createdAt[3] + "시"}&nbsp;
            {createdAt[4] + "분"}에 PICK했어요!
          </Time>
        </Box1>
      </Column>
    </React.Fragment>
  );
};

const Column = styled.div`
  display: grid;
  grid-template-columns: 11rem 2fr;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 1rem 0 1.5rem 0;
  width: 32rem;
  height: 8rem;
  margin: 0 0 1rem 2rem;
  color: #717171;
`;
const ImgWrap = styled.div`
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  border-radius: 3rem;
  padding: 0 0 0 1rem;
  & img {
    width: 85%;
    height: 85%;
    border-radius: 1.5rem;
  }
`;
const Box1 = styled.div`
  padding: 0.5rem 0 0 0;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;
const Grid1 = styled.div`
  width: 18rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TimeType = styled.span`
  font-size: 1rem;
`;
const TagName = styled.div`
  font-size: 1rem;
  height: 1rem; //height와 line-height값으 같이 가져갈것.
  line-height: 1rem;
  border-radius: 1.6rem;
  padding: 0.4rem 0.5rem 0.4rem 0.5rem; //태그 배경색 크기
  background-color: #dadada;
`;
const TagGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; //글자 깨짐 방지
  grid-gap: 0.1rem;
  padding: 0 0 2rem 0;
`;
const Time = styled.div`
  font-size: 1rem;
`;
const Grid = styled.div`
  color: black;
`;

export default MyPagePickCard;
