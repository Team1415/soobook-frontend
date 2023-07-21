import { useParams } from 'react-router-dom';

import BookDetailHeader from '@components/navigation/BookDetailHeader';

const DetailPage = () => {
  const { isbn = '' } = useParams();

  return (
    <>
      <BookDetailHeader title={isbn} />
    </>
  );
};

export default DetailPage;
