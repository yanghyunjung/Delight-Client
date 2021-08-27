import React from "react";

import styled from "styled-components";

const MyPagePickCard = ({ data }) => {
  const { createdAt, foodTag, imgUrl, name, timeType } = data;

  return (
    <React.Fragment>

      <Container>

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
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 11rem 2fr;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 1rem 0 0 0;
  width: 100%;
  /* height: 8rem; */
  margin: 1rem auto;
  color: #717171;
    @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  border-radius: 3rem;
  padding: 0 0 0 1rem;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
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

const TimeType = styled.span`
  font-size: 1rem;
`;

const Grid1 = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.mobile} {
    width: 90%;
  }
`;

const TagName = styled.div`
  font-size: 1rem;
  height: 1rem; // height와 line-height값으 같이 가져갈것.
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
  padding: 0 0 1rem 0;
`;

const Time = styled.div`
  font-size: 1rem;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

export default MyPagePickCard;
