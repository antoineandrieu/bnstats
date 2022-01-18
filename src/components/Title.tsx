import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Welcome = styled.h1``;
const Description = styled.h2``;

const Title: FC = () => {
  return (
    <StyledTitle>
      <Welcome>Welcome to Bnstats!</Welcome>
      <Description>Find info about a Stacks BNS Username</Description>
    </StyledTitle>
  );
};

export default Title;
