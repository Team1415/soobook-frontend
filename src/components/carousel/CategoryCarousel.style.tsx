import { Box, css, styled } from '@mui/material';

export const CarouselBox = styled(Box)`
  width: min(calc(100vw), ${(props) => props.theme.breakpoints.values.sm}px);
  background-color: #ffffff;

  ${css`
    .slick-slide {
      padding-right: 8px;
    }

    .slick-list {
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 20px;
      padding-right: 20px;
    }
  `}
`;
