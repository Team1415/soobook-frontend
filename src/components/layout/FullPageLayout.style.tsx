import { Box, styled } from '@mui/material';

export const FullPageLayoutBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const PageBox = styled(Box)`
  width: ${(props) => props.theme.breakpoints.values.sm}px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
