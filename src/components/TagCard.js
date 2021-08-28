import React, { useEffect } from "react";
import styled from "styled-components";

import { getTagResult, getTagResultThunk } from "../redux/modules/tagresult";
import { useDispatch, useSelector } from "react-redux";

import noData from "../image/nodatabobsi.png";

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
      {tags?.length === 0 && (
        <DIV2>
          <NoDataImg src={noData} />
          <NoDataTitle>
            앗! 선택한 태그들의 결과가 없어요. <br />
            다시 선택해 주시겠어요?
          </NoDataTitle>
        </DIV2>
      )}
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
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const DIV2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  margin-top: 10rem;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const NoDataImg = styled.img`
  display: flex;
  width: 40%;
  height: 40%;
  margin-bottom: 2rem;
`;

const NoDataTitle = styled.a`
  font-size: 1.9rem;
  line-height: 1.3em;
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
