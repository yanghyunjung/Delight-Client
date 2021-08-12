import React from "react";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

import TagSlide from "../components/TagSlide";
import TagCard from "../components/TagCard";

const Search = (props) => {
  const [tagOpen, setTagOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <div style={{ height: "100vh", position: "relative" }}>
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
              style={{ fontSize: "1.3rem", fontWeight: "350", display: "flex" }}
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
          전체 1개
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
      <TagCard />

      {/* 태그 컴포넌트 */}
      {tagOpen && (
        <TagSlide
          tagOpen={tagOpen}
          setTagOpen={setTagOpen}
          setSelectedTag={setSelectedTag}
        />
      )}
    </div>
  );
};

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
  font-size: 1.2rem;
  font-weight: bold;
  width: 8rem;
  height: 2rem;
  padding: 0.4rem 0.6rem;
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
