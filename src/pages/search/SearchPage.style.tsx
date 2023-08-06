import { css, keyframes, styled } from '@mui/material';

const moveInTop = keyframes`
  from {
    transform: translateY(var(--height));
  }
  to {
    transform: translateY(0);
  }
`;

export const SearchPageAnimationContainer = styled('div')<{ animate: boolean; height: number }>`
  --height: ${(props) => `${props.height}px`};

  animation: ${(props) =>
    props.animate
      ? css`
          ${moveInTop} 400ms;
        `
      : 'none'};
  transform: translateY(${(props) => (props.animate ? 'var(--searchBoxTop)' : '0')});
`;
