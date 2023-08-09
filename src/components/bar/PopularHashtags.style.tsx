import { Box, Stack, styled } from '@mui/material';

export const PopularHashtagBox = styled(Box)`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;

  background-color: #ffffff;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PopularBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 18px;
  margin-left: 20px;

  background-color: #203c8e;
  border-radius: 4px;

  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.28px;
  line-height: normal;
`;

export const PopularItem = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-left: 8px;

  color: #203c8e;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.28px;
  line-height: normal;

  cursor: pointer;
`;
