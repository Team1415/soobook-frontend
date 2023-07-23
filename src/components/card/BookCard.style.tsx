import { Stack, styled } from '@mui/material';

export const BookCardStack = styled(Stack)`
  background-color: #ffffff;
  height: 202px;
  width: 120px;
  align-items: center;
  border-radius: 8px;

  cursor: pointer;
`;

export const ImageStack = styled(Stack)`
  width: calc(120px - 32px);
`;

export const StyledImage = styled('img')`
  width: 88px;
  height: 128px;
  object-fit: cover;
`;

export const TitleStack = styled(Stack)`
  display: block;
  width: calc(120px - 24px);
`;

export const HashtagStack = styled(TitleStack)``;
