import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import Banner from '@components/bar/Banner';
import CategoryTitle from '@components/bar/CategoryTitle';
import PopularHashtags from '@components/bar/PopularHashtags';
import Title from '@components/bar/Title';
import BookCarousel from '@components/carousel/BookCarousel';
import UserHeader from '@components/header/UserHeader';
import { Book } from '@models/book';
import { Hashtag } from '@models/hashtag';
import { BookService } from '@services/BookService';
import { HashtagService } from '@services/HashtagService';

const HomePage = () => {
  const { data: newBooks, isLoading: isNewBookLoading } = useQuery<Book[]>(
    ['books', 'new'],
    () => BookService.getNewBooks(1), // TODO : category id로 변경
  );
  const { data: hashtagData, isLoading: isHashtagLoading } = useQuery<Hashtag[]>(
    ['hashtags', 'popular'],
    () => HashtagService.getPopularHashtags(1), // TODO : category id로 변경
  );

  const { t } = useTranslation();

  if (isNewBookLoading || isHashtagLoading) {
    return <></>;
  } else {
    return (
      <>
        <UserHeader />

        <Banner />

        <HashtagAutocomplete type='home' />
        <PopularHashtags hashtags={hashtagData?.slice(0, 3)} />

        <Title
          leftLabel={t('home-page.title.new')}
          rightLabel={t('home-page.label.more')}
          onClickRightLabel={() => alert('todo')}
        />
        <BookCarousel books={newBooks || []} />

        <CategoryTitle category='컴퓨터' />
        <BookCarousel books={newBooks || []} />
      </>
    );
  }
};

export default HomePage;
