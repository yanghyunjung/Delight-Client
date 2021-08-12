import React from "react";
import styled from "styled-components";

const Tags = Array.from({ length: 4 }, () => ({ name: "태그여섯글자" }));

const TagCard = (props) => {
  return (
    <DIV>
      <ImgWrap>
        <img
          src={"https://hyunjung.s3.ap-northeast-2.amazonaws.com/foodtag.jpeg"}
        />
      </ImgWrap>
      <span
        style={{
          fontSize: "1.6rem",
          fontWeight: "medium",
          lineHeight: "4rem",
          marginTop: "1.2rem",
        }}
      >
        해산물 토마토파스타 <br />
        <TagGrid>
          {Tags.map((item) => {
            return <TagName>{`# ` + item.name}</TagName>;
          })}
        </TagGrid>
      </span>
    </DIV>
  );
};

const DIV = styled.div`
  border-bottom: 0.2rem solid #ededed;
  display: grid;
  grid-template-columns: 14.8rem 2fr;
  background-color: #ffffff;
  width: 100%;
  height: 15rem;
`;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 13rem;
  height: 13rem;
  box-sizing: border-box;
  & img {
    width: 90%;
    height: 90%;
    padding: 1.7rem;
  }
`;

const TagName = styled.div`
  font-size: 1.2rem;
  width: 8rem;
  height: 2rem;
  padding: 0.4rem 0.6rem;
  line-height: 2rem;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
`;

const TagGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, minmax(5em, auto));
  grid-gap: 1rem;
  margin: 1rem 0 0 0;
`;

export default TagCard;
