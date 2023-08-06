import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash-es';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import CategoryPopularHashtags from '@components/bar/CategoryPopularHashtags';
import SearchResultHeader from '@components/header/SearchResultHeader';
import useHeightAnimation from '@hooks/useHeightAnimation';
import { Hashtag } from '@models/hashtag';
import { SearchPageAnimationContainer } from '@pages/search/SearchPage.style';
import { HashtagService } from '@services/HashtagService';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const SearchPage = () => {
  const { data: hashtagData } = useQuery<Hashtag[]>(['hashtags'], HashtagService.getHashtags);

  const { animate, componentHeight } = useHeightAnimation();
  const { hashtagSearchConditions } = useHashtagSearchConditionStore();

  return (
    <SearchPageAnimationContainer animate={animate} height={componentHeight || 0}>
      <HashtagAutocomplete type='search' hashtags={hashtagData} />
      {!isEmpty(hashtagSearchConditions) && <SearchResultHeader total={0} />}
      {isEmpty(hashtagSearchConditions) && (
        <CategoryPopularHashtags category='컴퓨터' hashtags={hashtagData ?? []} />
      )}
    </SearchPageAnimationContainer>
  );
};

export default SearchPage;
