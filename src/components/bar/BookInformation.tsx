import { useTranslation } from 'react-i18next';

import { BookInformationBox } from '@components/bar/BookInformation.style';
import BookInformationItem from '@components/bar/BookInformationItem';
import { DateUtil } from '@utils/DateUtil';

interface BookInformationProps {
  author: string;
  publisher: string;
  page: number;
  publicationDate: string;
  isbn: number;
  price: number;
}

const BookInformation = (props: BookInformationProps) => {
  const { author, publisher, page, publicationDate, isbn, price } = props;

  const { t } = useTranslation();

  return (
    <BookInformationBox>
      <BookInformationItem label={t('detail-page.label.author')} content={author} />
      <BookInformationItem label={t('detail-page.label.publisher')} content={publisher} />
      <BookInformationItem label={t('detail-page.label.page')} content={`${page}p`} />
      <BookInformationItem
        label={t('detail-page.label.publicationDate')}
        content={DateUtil.toString(publicationDate, 'YYYY.MM.DD')}
      />
      <BookInformationItem label={t('detail-page.label.isbn')} content={`${isbn}`} />
      <BookInformationItem
        label={t('detail-page.label.price')}
        content={`${price.toLocaleString('ko-KR')}원`}
      />
    </BookInformationBox>
  );
};

export default BookInformation;
