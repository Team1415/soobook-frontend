import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import HashtagAutocomplete from '@components/autocomplete/HashtagAutocomplete';
import Banner from '@components/bar/Banner';
import CategoryTitle from '@components/bar/CategoryTitle';
import PopularHashtags from '@components/bar/PopularHashtags';
import Title from '@components/bar/Title';
import BookCarousel from '@components/carousel/BookCarousel';
import UserHeader from '@components/header/UserHeader';
import { Book, BookCardModel } from '@models/book';
import { BookService } from '@services/BookService';

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
];

const sampleBooks: BookCardModel[] = [
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    hashtags: ['러스트', '초급'],
    imageUrl:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
  },
];

const HomePage = () => {
  const { data, isLoading } = useQuery<Book[]>(['books', 'new'], BookService.getNewestBooks);
  const { t } = useTranslation();

  if (isLoading) {
    return <></>;
  } else {
    console.log('data', data);
    return (
      <>
        <UserHeader />

        <Banner />

        <HashtagAutocomplete type="home" />
        <PopularHashtags hashtags={sampleHashtags} />

        <Title
          leftLabel={t('home-page.title.new')}
          rightLabel={t('home-page.label.more')}
          onClickRightLabel={() => alert('todo')}
        />
        <BookCarousel books={sampleBooks} />

        <CategoryTitle category="컴퓨터" />
        <BookCarousel books={sampleBooks} />
      </>
    );
  }
};

export default HomePage;
