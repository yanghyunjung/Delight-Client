import React from "react";
import styled from "styled-components";

const Tag = (props) => {
  const { tag } = props;
  return (
    <React.Fragment>
      <Container>
        <ContentContainer>
          <TagGrid>
            {tag.map((item, idx) => {
              return <TagName key={idx}>{`#` + item.name}</TagName>;
            })}
          </TagGrid>
        </ContentContainer>
      </Container>
    </React.Fragment>
  );
};

const TagName = styled.div`
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  background-color: #f2f2f2;
  border-radius: 2rem;
`;

const TagGrid = styled.div`
  margin: 0 3rem;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  grid-gap: 0.8rem;
`;

const Container = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  height: 5.6rem;
  width: 100%;
`;

export default Tag;
