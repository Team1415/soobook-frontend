import { Stack, StackProps, styled, Typography } from '@mui/material';

const BookListCardStack = (props: StackProps) => (
  <Stack direction="row" spacing="8px" {...props}>
    {props.children}
  </Stack>
);

export const StyledBookListCardStack = styled(BookListCardStack)`
  width: calc(100% - 40px);
  background-color: #ffffff;
  height: 95px;
  border-radius: 4px;
  padding: 12px;
`;

export const BookListImageStack = styled(Stack)`
  height: 71px;
`;

export const BookListImage = styled('img')`
  width: 55px;
  height: 71px;
  object-fit: cover;
`;

export const BookListBodyStack = styled(Stack)`
  height: 71px;
`;

export const BookListTitleTypography = styled(Typography)`
  height: 15px;
  word-break: break-word;
  font-size: 12px;
  font-weight: 500;
`;

export const BookListPublisherTypography = styled(Typography)`
  height: 14px;
  color: #797979;
  font-size: 11px;
  font-weight: 400;
  word-wrap: break-word;
`;

const BookListHashtagStack = (props: StackProps) => (
  <Stack direction="row" spacing="4px">
    {props.children}
  </Stack>
);

export const StyledBookListHashtagStack = styled(BookListHashtagStack)``;
