import React from "react";
import { useState } from "react";
import { getTagResult } from "../redux/modules/tagresult";
import { useSelector } from "react-redux";

import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

import TagSlide from "../components/TagSlide";
import TagCard from "../components/TagCard";

const Search = (props) => {
  const [tagOpen, setTagOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const tags = useSelector(getTagResult);
  return (
    <DIV tagOpen={tagOpen}>
      <Title>
        <span
          style={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            margin: "1.7rem 0 0 2.5rem",
            float: "left",
            lineHeight: "4.5rem",
          }}
        >
          태그로 음식 볼래요! <br />
          {selectedTag !== null && (
            <span
              style={{ fontSize: "1.4rem", fontWeight: "350", display: "flex" }}
            >
              선택 태그: <SelectTag>{`# ` + selectedTag}</SelectTag>
            </span>
          )}
        </span>
      </Title>
      <Container>
        <span
          style={{
            fontSize: "1.5rem",
            flexDirection: "row",
          }}
        >
          {tags && `전체 ${tags.length}개`}

          <span
            style={{
              fontSize: "1.6rem",
              marginLeft: "17rem",
              color: "#FF6B12",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setTagOpen(true)}
          >
            태그 선택하기 <ArrowDown tagOpen={tagOpen} />
          </span>
        </span>
      </Container>

      {/* 음식 태그 목록 컴포넌트 */}
      <TagCard tagOpen={tagOpen} />

      {/* 태그 컴포넌트 */}
      {tagOpen && (
        <TagSlide
          tagOpen={tagOpen}
          setTagOpen={setTagOpen}
          setSelectedTag={setSelectedTag}
        />
      )}
    </DIV>
  );
};

const DIV = styled.div`
  height: 100vh;
  position: relative;
  // 태그 슬라이드 올라올 때 뒤에 배경 CSS 설정
  ${(props) =>
    props.tagOpen &&
    css`
      overflow: hidden;
      height: 140px !important;
    `}
`;

const ArrowDown = styled(IoIosArrowDown)`
  vertical-align: middle;
  transform: rotate(${({ tagOpen }) => (tagOpen ? `-180deg` : `0`)});
  transition: 0.3s ease-in-out;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectTag = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.9rem;
  margin-left: 1rem;
  font-size: 1.4rem;
  height: 2rem;
  padding: 0.4rem 1rem;
  line-height: 2rem;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0 0;
`;

export default Search;
