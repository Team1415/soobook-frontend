import { useQuery } from '@tanstack/react-query';
import { isEmpty, map } from 'lodash-es';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import CategoryPopularHashtags from '@components/bar/CategoryPopularHashtags';
import CustomCircularProgress from '@components/bar/CustomCircularProgress';
import BookListCards from '@components/card/BookListCards';
import SearchResultHeader from '@components/header/SearchResultHeader';
import useHeightAnimation from '@hooks/useHeightAnimation';
import { Book } from '@models/book';
import { Hashtag } from '@models/hashtag';
import { SearchPageAnimationContainer, SearchPageContainer } from '@pages/search/SearchPage.style';
import { BookService } from '@services/BookService';
import { HashtagService } from '@services/HashtagService';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const SearchPage = () => {
  const { animate, componentHeight } = useHeightAnimation();
  const { hashtagSearchConditions, sort } = useHashtagSearchConditionStore();

  const hashtagIds = map(hashtagSearchConditions, 'id');

  const { data: popularHashtagData } = useQuery<Hashtag[]>(
    ['hashtags', 'popular'],
    () => HashtagService.getPopularHashtags(1), // TODO : category id로 변경
  );

  const { data: hashtagData } = useQuery<Hashtag[]>(
    ['hashtags'],
    () => HashtagService.getHashtags(1), // TODO : category id로 변경
  );

  const { data: bookData, isLoading } = useQuery<Book[]>(
    ['books', hashtagIds, sort],
    () => BookService.getBooks(1, sort, hashtagIds), // TODO : category id로 변경
    { enabled: !isEmpty(hashtagIds), cacheTime: 1000 },
  );

  return (
    <SearchPageAnimationContainer animate={animate} height={componentHeight || 0}>
      <HashtagAutocomplete type='search' hashtags={hashtagData} />
      <SearchPageContainer>
        {!isEmpty(hashtagSearchConditions) && <SearchResultHeader total={bookData?.length ?? 0} />}
        {isEmpty(hashtagSearchConditions) && (
          <CategoryPopularHashtags category='컴퓨터' hashtags={popularHashtagData ?? []} />
        )}

        {!isEmpty(hashtagSearchConditions) && isLoading ? (
          <CustomCircularProgress />
        ) : (
          <BookListCards books={bookData ?? []} />
        )}
      </SearchPageContainer>
    </SearchPageAnimationContainer>
  );
};

export default SearchPage;
