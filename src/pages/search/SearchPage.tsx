import { css, keyframes, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import useHeightAnimation from '@hooks/useHeightAnimation';

const sampleHashtags = [
  {
    code: 1,
    label: '파이썬',
  },
  {
    code: 2,
    label: '러스트',
  },
  {
    code: 3,
    label: '리액트',
  },
  {
    code: 4,
    label: '스프링',
  },
  {
    code: 5,
    label:
      '카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카',
  },
  {
    code: 6,
    label: 'react',
  },
];

const moveInTop = keyframes`
  from {
    transform: translateY(var(--height));
  }
  to {
    transform: translateY(0);
  }
`;

const SearchPageAnimationContainer = styled('div')<{ animate: boolean; height: number }>`
  --height: ${(props) => `${props.height}px`};

  animation: ${(props) =>
    props.animate
      ? css`
          ${moveInTop} 400ms;
        `
      : 'none'};
  transform: translateY(${(props) => (props.animate ? 'var(--searchBoxTop)' : '0')});
`;

const SearchPage = () => {
  const { t } = useTranslation();

  const { animate, componentHeight } = useHeightAnimation();

  return (
    <SearchPageAnimationContainer animate={animate} height={componentHeight || 0}>
      <HashtagAutocomplete type="search" hashtags={sampleHashtags} />
    </SearchPageAnimationContainer>
  );
};

export default SearchPage;
