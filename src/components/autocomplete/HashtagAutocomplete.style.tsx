import { Box, styled } from '@mui/material';

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
