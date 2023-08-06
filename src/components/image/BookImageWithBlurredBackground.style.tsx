import { Box, styled } from '@mui/material';

export const BookImageWithBlurredBackgroundBox = styled(Box)<{ imageUrl: string }>`
  width: 100%;
  height: 250px;

  background: url(${(props) => props.imageUrl}), lightgray 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BooxImageContainer = styled(Box)`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
`;

export const BookImage = styled('img')`
  width: 172px;
  height: 219px;

  object-fit: fill;

  background-color: transparent;
`;
