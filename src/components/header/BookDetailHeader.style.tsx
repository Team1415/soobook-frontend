import { Box, styled, Typography } from '@mui/material';

export const BookDetailHeaderBox = styled(Box)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

export const BackArrowBox = styled(Box)`
  display: flex;
  margin-left: 20px;
  margin-right: 10px;
`;

export const MenuBox = styled(Box)`
  display: flex;
  margin-left: 10px;
  margin-right: 20px;
`;

export const EllipsisTypography = styled(Typography)`
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  width: ${(props) => (props.theme.breakpoints.down('sm') ? 'calc(100vw - 100px)' : undefined)};
`;
