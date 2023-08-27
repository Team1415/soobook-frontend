import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash-es';
import { useParams } from 'react-router-dom';

import BookDetailTitle from '@components/bar/BookDetailTitle';
import BookInformation from '@components/bar/BookInformation';
import BookIntroduction from '@components/bar/BookIntroduction';
import GrayDivider from '@components/divider/GrayDivider';
import BookDetailHeader from '@components/header/BookDetailHeader';
import BookImageWithBlurredBackground from '@components/image/BookImageWithBlurredBackground';
import { BookDetail } from '@models/book';
import { BookService } from '@services/BookService';
import { DateUtil } from '@utils/DateUtil';

const BookDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery<BookDetail>(['books', id], () => BookService.getBook(id));

  if (isLoading || isEmpty(data)) {
    return <></>;
  } else {
    return (
      <>
        <BookDetailHeader />

        <BookImageWithBlurredBackground imageUrl={data.thumbnail} />

        <BookDetailTitle title={data.title} hashtags={data.hashtags} />
        <GrayDivider />

        <BookInformation
          authors={data.authors}
          translators={data.translators}
          publisher={data.publisher}
          page={data.page}
          publishDate={DateUtil.toString(data.publishDate)}
          isbn={data.isbn10}
          price={data.price}
        />
        <GrayDivider />

        <BookIntroduction type='introduction' content={data.description} />
        <GrayDivider />

        <BookIntroduction type='index' content={data.index} />
      </>
    );
  }
};

export default BookDetailPage;
