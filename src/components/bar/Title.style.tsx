import { Box, styled, Typography } from '@mui/material';

export const TitleBox = styled(Box)`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const LeftBox = styled(Box)`
  display: flex;

  margin-left: 20px;
`;

export const LeftTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.28px;
  white-space: pre;
`;

export const CategoryTypography = styled(LeftTypography)`
  color: #203c8e;
`;

export const RightTypography = styled(Typography)`
  color: #797979;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;

  margin-right: 20px;
`;
