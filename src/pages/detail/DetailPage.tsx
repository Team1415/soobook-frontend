import { useParams } from 'react-router-dom';

import BookDetailTitle from '@components/bar/BookDetailTitle';
import BookIndex from '@components/bar/BookIndex';
import BookInformation from '@components/bar/BookInformation';
import BookIntroduction from '@components/bar/BookIntroduction';
import GrayDivider from '@components/divider/GrayDivider';
import BookDetailHeader from '@components/header/BookDetailHeader';
import BookImageWithBlurredBackground from '@components/image/BookImageWithBlurredBackground';
import { Index } from '@models/index';

const sampleHashtags = ['REST', '파이썬', '크롤러', '웹개발', '감자'];

const sampleIndexs: Index[] = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    page: 1,
  },
  {
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    page: 21,
  },
  {
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    page: 37,
  },
  {
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    page: 80,
  },
];

const DetailPage = () => {
  const { id } = useParams();

  console.log('id', id);

  return (
    <>
      <BookDetailHeader />

      <BookImageWithBlurredBackground imageUrl='https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031' />

      <BookDetailTitle title='The Rust Programming Language (Covers Rust 2018)' hashtags={sampleHashtags} />
      <GrayDivider />

      <BookInformation
        author='Glory Song'
        publisher='지호북스'
        page={127}
        publicationDate='2020/07/13'
        isbn='1234567890'
        price={47900}
      />
      <GrayDivider />

      <BookIntroduction content='Rust is proving to be a productive tool for collaborating among large teams of developers with varying levels of systems programming knowledge. Low-level code is prone to various subtle bugs, which in most other languages can be caught only through extensive testing and careful code review by experienced developers. In Rust, the compiler plays a gatekeeper role by refusing to compile code with these elusive bugs, including concurrency bugs. By working alongside the compiler, the team can spend their time focusing on the program’s logic rather than chasing down bugs.' />
      <GrayDivider />

      <BookIndex indexs={sampleIndexs} />
    </>
  );
};

export default DetailPage;
