import { Box, styled, Typography } from '@mui/material';

export const CategoryPopularHashtagsBox = styled(Box)`
  width: 100%;

  background-color: #f2f2f2;

  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HashtagBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 4px;

  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
`;

export const CategoryTypography = styled(Typography)`
  color: #203c8e;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.28px;
`;

export const HashtagBadgeBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
  gap: 8px;
`;
