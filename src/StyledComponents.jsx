import React from 'react';
import styled from 'styled-components';
import BasicTitle from './StyledComponents/BasicTitle';
import { Buttonone, OtherButton } from './StyledComponents/Buttons';
import { Button } from '@mui/material';

const MUIVariantBtn = styled(Button)`
  text-transform: capitalize;
  color: red;
`;

function StyledComponents() {
  return (
    <div>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle special>I am the Special one</BasicTitle>
      <Buttonone>Click Me</Buttonone>
      <OtherButton>Click me too</OtherButton>
      <Button color="primary" variant="contained">
        MUI button
      </Button>
      <MUIVariantBtn>I am the variant</MUIVariantBtn>
    </div>
  );
}

export default StyledComponents;
