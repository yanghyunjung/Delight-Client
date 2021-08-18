import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../elements";
import Swal from "sweetalert2";

import { getTags, getTagThunk } from "../redux/modules/tag";
import { getTagResultThunk } from "../redux/modules/tagresult";
import { useDispatch, useSelector } from "react-redux";

const Tag = ({ tagOpen, setTagOpen, setSelectedTag }) => {
  const dispatch = useDispatch();

  const [tagIndex, setTagIndex] = useState(1);
  const [selectedTag2, setSelectedTag2] = useState([]);
  const tags = useSelector(getTags);

  const category_types = [
    { type: "COUNTRY", category: "나라" },
    { type: "INGREDIENT", category: "재료" },
    { type: "SITUATION", category: "상황" },
    { type: "PLACE", category: "장소" },
  ];

  // 기본값(COUNTRY) 설정
  useEffect(() => {
    dispatch(getTagThunk("COUNTRY"));
  }, []);

  // 태그 delete(삭제) -> filter 함수 사용
  const handleDeleteSelectedTag = (id) => {
    const newTags = selectedTag2.filter((tag) => {
      return tag.id !== id;
    });

    setSelectedTag2(newTags);
  };

  // 선택하기를 눌렀을 때 실행되는 함수
  const handleSubmitTags = () => {
    console.log("submit");
    let tagIdArray = [];
    let tagNameArray = [];

    setTagOpen(false);

    for (let i in selectedTag2) {
      tagIdArray.push(selectedTag2[i]["id"]);
      tagNameArray.push(selectedTag2[i]["name"]);
    }
    dispatch(getTagResultThunk(tagNameArray));
    setSelectedTag(tagNameArray);
  };
  return (
    <>
      {/* 태그 선택 화면 띄우기 */}
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          height: "100%",
        }}
        onClick={() => setTagOpen(false)}
      ></div>
      <DIV tagOpen={tagOpen}>
        <div>
          <Layout>
            <Text size="1.7rem" bold>
              1. 카테고리 선택
            </Text>
            <Box>
              {category_types.map(({ type, category }, index) => (
                <SelectTag
                  tagIndex={tagIndex}
                  onClick={() => {
                    setTagIndex(index + 1);
                    dispatch(getTagThunk(type));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {category}
                </SelectTag>
              ))}
            </Box>
            <Text size="1.7rem" bold>
              2. 태그 선택
            </Text>
            <Box1>
              {tags.map(({ id, name }, index) => (
                <SelectTag1
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedTag2([...selectedTag2, { id, name }])}
                >
                  {name}
                </SelectTag1>
              ))}
            </Box1>
            <Text size="1.7rem" bold>
              3. 선택한 태그
            </Text>
            <Box2>
              {selectedTag2?.map(({ id, name }) => (
                <SelectTag2
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteSelectedTag(id)}
                >
                  {name}&nbsp;&nbsp;X
                </SelectTag2>
              ))}
            </Box2>
          </Layout>
        </div>
        {selectedTag2.length > 0 ? (
          <TagBtn onClick={() => handleSubmitTags()}>선택하기</TagBtn>
        ) : (
          <TagBtn
            onClick={() => {
              Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "선택된 태그가 없습니다",
                showConfirmButton: false,
                timer: 2000,
              });
            }}
          >
            선택하기
          </TagBtn>
        )}
      </DIV>
    </>
  );
};

const boxShow = keyframes`
    from {
        bottom: -100%;
    }
    to {
        bottom: 0;
    }
`;

const DIV = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  animation: ${boxShow} 0.9s ease-in-out;
  bottom: 0;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  padding-top: 1.5rem;
`;

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: auto;
  margin: 0 0 1rem 1.3rem;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 6rem;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 9rem;
  width: 85%;
  padding: 0.3rem 0 0.3rem 1.3rem;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
`;

const Box2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

const SelectTag = styled.div`
  margin: 0 2rem 0 0;
  font-size: 1.4rem;
  height: 2rem;
  padding: 0.5rem 1.5rem;
  line-height: 2rem;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
  ${(props) =>
    props.tagIndex &&
    `  &:nth-child(${props.tagIndex}) {
    color: #ffffff;
    background-color: #FFA012;
    border-bottom: 1px solid #f2f2f2;
    transition: 0.3s ease;
  }`}
`;

const SelectTag1 = styled.div`
  margin: 0 1rem 0 0;
  font-size: 1.4rem;
  height: 2rem;
  padding: 0.5rem 1.5rem;
  line-height: 2rem;
  background-color: #ffffff;
  border-radius: 1.6rem;
`;

const SelectTag2 = styled.div`
  background-color: #ffa012;
  color: #ffffff;
  margin: 0 1rem 0.8rem 0;
  font-size: 1.4rem;
  height: 2rem;
  line-height: 2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.6rem;
`;

const TagBtn = styled.button`
  width: 100%;
  height: 6.3rem;
  background-color: #ffa012;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 2rem;
`;

export default Tag;
