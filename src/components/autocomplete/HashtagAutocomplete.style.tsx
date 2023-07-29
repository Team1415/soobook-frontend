import { Box, css, Stack, styled, TextField } from '@mui/material';

import { ReactComponent as SearchIcon } from '@assets/search-icon.svg';

export const HashtagAutocompleteBox = styled(Box)`
  width: 100%;
  height: 52px;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HashtagBadgeBox = styled(Box)<{ show: boolean }>`
  width: 100%;
  min-height: ${(props) => (props.show ? '34px' : 0)};

  padding-top: ${(props) => (props.show ? '8px' : 0)};
  padding-bottom: ${(props) => (props.show ? '4px' : 0)};
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  overflow: hidden;
  transition: ${(props) =>
    props.theme.transitions.create(['min-height', 'padding-top', 'padding-bottom'], {
      duration: props.theme.transitions.duration.enteringScreen,
      easing: props.theme.transitions.easing.easeInOut,
    })};
`;

export const HashtagTextFieldStack = styled(Stack)`
  border-radius: 4px;
  height: 44px;
  width: 100%;
  background-color: #f2f2f2;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  height: 16px;
  width: 16px;
  margin-left: 12px;
`;

export const StyledTextField = styled(TextField)`
  ${css`
    & fieldset {
      border: none;
    }

    & .MuiInputBase-root {
      color: #9f9f9f;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.28px;
    }

    & .MuiOutlinedinput-root {
      padding-right: 0px !important;
    }
  `}
`;
