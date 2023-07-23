import { Box, styled, Typography } from '@mui/material';

export const BannerBox = styled(Box)`
  width: 100%;
  height: 137px;

  position: relative;

  background-color: #c9deec;
`;

export const TypoBox = styled(Box)`
  position: absolute;

  top: 30px;
  left: 20px;
`;

export const TypoTopBox = styled(Box)`
  display: flex;
`;

export const SvgBox = styled(Box)`
  position: absolute;

  bottom: 23px;
  right: 20px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.28px;
  line-height: 30px;
`;

export const BoldTypography = styled(StyledTypography)`
  font-weight: 700;
`;
