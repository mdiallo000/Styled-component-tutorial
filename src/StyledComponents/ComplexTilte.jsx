import React from 'react';
import styled from 'styled-components';
const ComplexTilte = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    color: frost;
    text-align: center;
  }
  .underline {
    margin: 0 auto;
    background: purple;
    height: 0.35rem;
    width: 5.34rem;
  }
`;

export default ComplexTilte;
