import { join } from 'lodash-es';
import { useTranslation } from 'react-i18next';

import { BookInformationBox } from '@components/bar/BookInformation.style';
import BookInformationItem from '@components/bar/BookInformationItem';
import { DateUtil } from '@utils/DateUtil';

interface BookInformationProps {
  authors: string[];
  translators?: string[];
  publisher: string;
  page: number;
  publishDate: string;
  isbn: number;
  price: number;
}

const BookInformation = (props: BookInformationProps) => {
  const { authors, publisher, translators, page, publishDate, isbn, price } = props;

  const { t } = useTranslation();

  return (
    <BookInformationBox>
      <BookInformationItem label={t('detail-page.label.author')} content={join(authors, ', ')} />
      {translators && (
        <BookInformationItem label={t('detail-page.label.translator')} content={join(translators, ', ')} />
      )}
      <BookInformationItem label={t('detail-page.label.publisher')} content={publisher} />
      <BookInformationItem label={t('detail-page.label.page')} content={`${page}p`} />
      <BookInformationItem
        label={t('detail-page.label.publishDate')}
        content={DateUtil.toString(publishDate, 'YYYY.MM.DD')}
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
