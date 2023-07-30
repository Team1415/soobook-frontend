import { useParams } from 'react-router-dom';

import BookDetailHeader from '@components/header/BookDetailHeader';
import BookImageWithBlurredBackground from '@components/image/BookImageWithBlurredBackground';

const DetailPage = () => {
  const { id } = useParams();

  console.log('id', id);

  return (
    <>
      <BookDetailHeader />
      <BookImageWithBlurredBackground imageUrl="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031" />
    </>
  );
};

export default DetailPage;
