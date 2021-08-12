import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// 태그 갯수 배열로 설정
const Tags = Array.from({ length: 10 }, () => ({ name: "Auto Layout" }));

const Tag = ({ tagOpen, setTagOpen, setSelectedTag }) => {
  const [radioValue, setRadioValue] = useState(null); 
  return (
    <>
      {/* 태그 선택 화면 띄우기 */}
      <div
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          height: "100vh",
        }}
        onClick={() => setTagOpen(false)}
      ></div>
      <DIV tagOpen={tagOpen}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridRowGap: "2rem",
          }}
        >
          {Tags.map((tag, i) => (
            <Layout key={tag.name}>
              <RadioBtn
                id={i}
                type="radio"
                name="tag"
                value={tag.name}
                style={{ margin: "1rem" }}
                onClick={() => setRadioValue(tag.name)}
              />
              <Btn></Btn>
              <label htmlFor={i} style={{ fontSize: "1.5rem" }}>
                {tag.name}
              </label>
            </Layout>
          ))}
        </div>
        {radioValue ? (
          <TagBtn
            onClick={() => {
              setSelectedTag(radioValue);
              setTagOpen(false);
            }}
          >
            선택하기
          </TagBtn>
        ) : (
          <TagBtn
            onClick={() => {
              alert('선택된 태그가 없습니다:)');
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
  position: absolute;
  width: 100%;
  animation: ${boxShow} 0.9s ease-in-out;
  bottom: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding-top: 1.5rem;
`;

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  height: auto;
  margin: 1rem 0 0 0;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid gray;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.6rem;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffa012;
    transform: scale(0);
    transition: transform 0.15s;
  }
`;

const RadioBtn = styled.input`
  display: none;

  &:checked + div::after {
    transform: scale(0.7);
  }
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
