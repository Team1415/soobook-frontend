import { useQuery } from '@tanstack/react-query';
import { isEmpty, map, slice } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import BookDetailTitle from '@components/bar/BookDetailTitle';
import BookInformation from '@components/bar/BookInformation';
import BookIntroduction from '@components/bar/BookIntroduction';
import Title from '@components/bar/Title';
import BookCarousel from '@components/carousel/BookCarousel';
import GrayDivider from '@components/divider/GrayDivider';
import BookDetailHeader from '@components/header/BookDetailHeader';
import BookImageWithBlurredBackground from '@components/image/BookImageWithBlurredBackground';
import { BookSort } from '@constants/sort';
import { Book, BookDetail } from '@models/book';
import { BookService } from '@services/BookService';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';
import { DateUtil } from '@utils/DateUtil';

const BookDetailPage = () => {
  const { categoryIndex } = useHashtagSearchConditionStore();
  const { t } = useTranslation();
  const { id } = useParams();

  const { data: bookDetail, isLoading: isBookDetailLoading } = useQuery<BookDetail>(['books', id], () =>
    BookService.getBook(id),
  );

  const hashtagIds = map(bookDetail?.hashtags, 'id');

  const { data: relatedBooks } = useQuery<Book[]>(
    ['books', hashtagIds, BookSort.POPULAR],
    () => BookService.getBooks(categoryIndex, BookSort.POPULAR, hashtagIds), // TODO : category id로 변경
    { enabled: !isBookDetailLoading, cacheTime: 1000 },
  );

  if (isBookDetailLoading || isEmpty(bookDetail)) {
    return <></>;
  } else {
    return (
      <>
        <BookDetailHeader />

        <BookImageWithBlurredBackground imageUrl={bookDetail.thumbnailUrl} />

        <BookDetailTitle title={bookDetail.title} hashtags={bookDetail.hashtags} />
        <GrayDivider />

        <BookInformation
          authors={bookDetail.authors}
          translators={bookDetail.translators}
          publisher={bookDetail.publisher}
          page={bookDetail.page}
          publishDate={DateUtil.toString(bookDetail.publishDate)}
          isbn={bookDetail.isbn10}
          price={bookDetail.price}
        />
        <GrayDivider />

        <BookIntroduction type='introduction' content={bookDetail.description} />
        <GrayDivider />

        <BookIntroduction type='index' content={bookDetail.index} />

        <Title leftLabel={t('detail-page.label.related')} />
        <BookCarousel books={slice(relatedBooks, 0, 10) || []} />
      </>
    );
  }
};

export default BookDetailPage;
