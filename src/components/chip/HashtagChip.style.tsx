import { Chip, css, styled } from '@mui/material';

export const StyledChip = styled(Chip)`
  height: 19px;
  max-width: 46px;

  margin: 4;

  border: 0px none;
  border-radius: 8px;

  background-color: #f2f2f2;

  color: #203c8e;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.28px;
  line-height: normal;
  white-space: nowrap;

  ${css`
    & .MuiChip-label {
      padding-left: 4px;
      padding-right: 4px;
    }
  `}
`;
