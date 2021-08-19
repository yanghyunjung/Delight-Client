import React, { useEffect } from "react";
import styled from "styled-components";

import { getTagResult, getTagResultThunk } from "../redux/modules/tagresult";
import { useDispatch, useSelector } from "react-redux";

const TagCard = () => {
  const dispatch = useDispatch();
  const tags = useSelector(getTagResult);

  // []는 전체 목록을 불러옴 -> 백엔드와 얘기 ok
  useEffect(() => {
    dispatch(getTagResultThunk([]));
  }, []);

  return (
    <>
      {tags?.map((tag) => (
        <DIV>
          <ImgWrap>
            <img src={tag.imgUrl} alt="tags" />
          </ImgWrap>

          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "medium",
              lineHeight: "4rem",
            }}
          >
            {tag.name} <br />
            <TagGrid>
              {tag.tags.map((tag) => {
                return <TagName>{`# ` + tag.name}</TagName>;
              })}
            </TagGrid>
          </span>
        </DIV>
      ))}
    </>
  );
};

const DIV = styled.div`
  border-bottom: 0.2rem solid #ededed;
  display: grid;
  grid-template-columns: 13rem 2fr;
  background-color: #ffffff;
  width: 100%;
  height: 11.8rem;
`;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 13rem;
  height: 13rem;
  box-sizing: border-box;
  padding: 1rem;
  & img {
    width: 85%;
    height: 85%;
    padding: 0.2rem;
  }
`;

const TagName = styled.div`
  font-size: 1.4rem;
  height: 2rem;
  padding: 0.4rem 1rem;
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
`;

export default TagCard;
