import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import CategoryTitle from '@components/bar/CategoryTitle';
import Title from '@components/bar/Title';
import BookCarousel from '@components/carousel/BookCarousel';
import UserHeader from '@components/header/UserHeader';
import { Book, BookCardModel } from '@models/book';
import { BookService } from '@services/BookService';

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
    return <>{t('common.message.is-loading')}</>;
  } else {
    console.log('data', data);
    return (
      <>
        <UserHeader />

        <Title
          leftLabel="신간을 구경하세요"
          rightLabel="더보기 >"
          onClickRightLabel={() => alert('imhere')}
        />
        <BookCarousel books={sampleBooks} />

        <CategoryTitle category="컴퓨터" />
        <BookCarousel books={sampleBooks} />
      </>
    );
  }
};

export default HomePage;
