import { useQuery } from '@tanstack/react-query';
import { slice } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import Banner from '@components/bar/Banner';
import CategoryTitle from '@components/bar/CategoryTitle';
import PopularHashtags from '@components/bar/PopularHashtags';
import Title from '@components/bar/Title';
import BookCarousel from '@components/carousel/BookCarousel';
import UserHeader from '@components/header/UserHeader';
import { BookSort } from '@constants/sort';
import { Book } from '@models/book';
import { Category } from '@models/category';
import { Hashtag } from '@models/hashtag';
import { BookService } from '@services/BookService';
import { CategoryService } from '@services/CategoryService';
import { HashtagService } from '@services/HashtagService';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const HomePage = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<Category[]>(['categories'], () =>
    CategoryService.getCategories(),
  );
  const { data: newBooks, isLoading: isNewBookLoading } = useQuery<Book[]>(
    ['books', 'new'],
    () => BookService.getNewBooks(1), // TODO : category id로 변경
  );
  const { data: hashtagData, isLoading: isHashtagLoading } = useQuery<Hashtag[]>(
    ['hashtags', 'popular'],
    () => HashtagService.getPopularHashtags(1), // TODO : category id로 변경
  );

  const { setSort } = useHashtagSearchConditionStore();

  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isNewBookLoading || isHashtagLoading || isCategoriesLoading) {
    return <></>;
  } else {
    return (
      <>
        <UserHeader />

        <Banner />

        <HashtagAutocomplete type='home' />
        <PopularHashtags hashtags={hashtagData} />

        <Title
          leftLabel={t('home-page.title.new')}
          rightLabel={t('home-page.label.more')}
          onClickRightLabel={() => {
            navigate('/search');
            setSort(BookSort.NEW);
          }}
        />
        <BookCarousel books={slice(newBooks, 0, 10) || []} />

        <CategoryTitle category='컴퓨터' />
        <BookCarousel books={slice(newBooks, 0, 10) || []} />
      </>
    );
  }
};

export default HomePage;
