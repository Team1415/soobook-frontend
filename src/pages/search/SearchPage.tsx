import { css, keyframes, styled } from '@mui/material';
import { isEmpty } from 'lodash-es';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import CategoryPopularHashtags from '@components/bar/CategoryPopularHashtags';
import SearchResultHeader from '@components/header/SearchResultHeader';
import useHeightAnimation from '@hooks/useHeightAnimation';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const sampleHashtags = [
  {
    id: 1,
    name: '파이썬',
  },
  {
    id: 2,
    name: '러스트',
  },
  {
    id: 3,
    name: '리액트',
  },
  {
    id: 4,
    name: '스프링',
  },
  {
    id: 5,
    name: '카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카카프카',
  },
  {
    id: 6,
    name: 'react',
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
  const { animate, componentHeight } = useHeightAnimation();
  const { hashtagSearchConditions } = useHashtagSearchConditionStore();

  return (
    <SearchPageAnimationContainer animate={animate} height={componentHeight || 0}>
      <HashtagAutocomplete type='search' hashtags={sampleHashtags} />
      {!isEmpty(hashtagSearchConditions) && <SearchResultHeader total={0} />}
      {isEmpty(hashtagSearchConditions) && (
        <CategoryPopularHashtags category='컴퓨터' hashtags={sampleHashtags} />
      )}
    </SearchPageAnimationContainer>
  );
};

export default SearchPage;
