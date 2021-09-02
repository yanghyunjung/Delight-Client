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
    <Layout>
      <DIV tagOpen={tagOpen}>
        <Title>
          <span
            style={{
              fontSize: "2.4rem",
              fontWeight: "bold",
              margin: "1.3rem 0px 1.3rem 1.3rem",
              float: "left",
              lineHeight: "4.5rem",
            }}
          >
            태그로 음식 볼래요! <br />
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "350",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              선택된 태그:
              {selectedTag?.map((tag) => (
                <SelectTag>{`# ` + tag}</SelectTag>
              ))}
            </span>
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
          </span>
          <span
            style={{
              fontSize: "1.6rem",
              color: "#FF6B12",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setTagOpen(true)}
          >
            태그 선택하기 <ArrowDown tagOpen={tagOpen} />
          </span>
        </Container>

        {/* 음식 목록 불러오기 */}
        <TagCard tagOpen={tagOpen} />

        {/* 태그 검색하기 컴포넌트 */}
        {tagOpen && (
          <TagSlide
            tagOpen={tagOpen}
            setTagOpen={setTagOpen}
            setSelectedTag={setSelectedTag}
          />
        )}
      </DIV>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const DIV = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  // 태그 선택하기 버튼 눌렀을 때 div 배경 height값 설정
  ${(props) =>
    props.tagOpen &&
    css`
      height: 95vh !important;
    `}
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
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

export default Search;
