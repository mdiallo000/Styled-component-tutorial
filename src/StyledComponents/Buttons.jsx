import styled from 'styled-components';

export const Buttonone = styled.button`
  padding: 0.25rem;
  margin: 1rem auto;
  background-color: purple;

  text-transform: capitalize;
  color: white;
  width: 200px;
  border-radius: 0.2rem;
  border: none;
  display: block;
`;

export const OtherButton = styled(Buttonone)`
  background-color: gold;
  boder-color: red;
`;
