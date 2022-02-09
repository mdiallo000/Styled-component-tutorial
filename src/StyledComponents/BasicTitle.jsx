import styled from "styled-components";
const BasicTitle = styled.h1`
  padding: 1rem auto;
  text-align: center;
  text-transform: capitalize;
  color: ${({ special }) => (special ? "gold" : "blue")};
`;
export default BasicTitle;
