import { Chip, css, styled } from '@mui/material';

import { BadgeType } from '@models/badge';

export const StyledBadge = styled(Chip)<{ type: BadgeType }>`
  height: ${({ type }) => (type === 'simple' ? '19px' : '22px')};
  max-width: ${({ type }) => (type === 'simple' || type === 'simple-large' ? '46px' : undefined)};

  margin: 4;

  border: ${({ type }) => (type === 'outlined' ? '1px #203c8e solid' : '0px none')};
  border-radius: ${({ type }) => (type === 'outlined' ? '4px' : '8px')};

  background-color: ${({ type }) => (type === 'outlined' ? '#ffffff' : 'f2f2f2')};

  color: #203c8e;
  font-size: ${({ type }) => (type === 'simple' ? '10px' : '11px')};
  font-weight: ${({ type }) => (type === 'outlined' ? 500 : 400)};
  letter-spacing: -0.28px;
  line-height: normal;
  white-space: nowrap;

  ${({ type }) =>
    type === 'simple' || type === 'simple-large'
      ? css`
          & .MuiChip-label {
            padding-left: 4px;
            padding-right: 4px;
          }
        `
      : css`
          & .MuiChip-label {
            padding: 8px;
          }
        `}
`;

export const StyledDeleteBadge = styled(Chip)`
  max-width: 130px;
  height: 21px;

  border: 1px solid #cccccc;
  border-radius: 20px;

  background-color: #ffffff;

  align-items: center;

  color: #797979;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.28px;

  ${css`
    & .MuiChip-label {
      padding-left: 6px;
      padding-right: 9px;
    }

    & .MuiChip-deleteIcon {
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }
  `}
`;
