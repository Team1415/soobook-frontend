import { Box, styled, Typography } from '@mui/material';

export const BookIntroductionBox = styled(Box)`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
`;

export const TitleTypography = styled(Typography)`
  color: #464646;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
`;

export const ContentTypography = styled(Typography)`
  color: #464646;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  white-space: pre-line;
`;
