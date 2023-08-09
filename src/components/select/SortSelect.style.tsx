import { Box, styled } from '@mui/material';

export const SortSelectBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled('select')`
  width: 100%;
  height: 17px;

  display: flex;
  align-items: center;

  border: none;

  padding-right: 12px;

  color: #203c8e;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: right;

  background-image: url('/assets/down-arrow-icon.svg');
  background-repeat: no-repeat;
  background-position: 100% center;

  cursor: pointer;

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::-ms-expand {
    display: none;
  }
`;
