import { Box, css, styled } from '@mui/material';

export const SliderBox = styled(Box)`
  width: min(calc(100vw), ${(props) => props.theme.breakpoints.values.sm}px);
  background-color: #f3f3f3;

  ${css`
    .slick-slide {
      padding-right: 8px;
    }

    .slick-list {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 20px;
      padding-right: 20px;
    }
  `}
`;
