import { useTranslation } from 'react-i18next';

import { BookIndexBox, StyledTypography } from '@components/bar/BookIndex.style';
import BookIndexItem from '@components/bar/BookIndexItem';
import { Index } from '@models/index';

interface BookIndexProps {
  indexs: Index[];
}

const BookIndex = (props: BookIndexProps) => {
  const { indexs } = props;

  const { t } = useTranslation();

  return (
    <BookIndexBox>
      <StyledTypography>{t('detail-page.title.index')}</StyledTypography>
      {indexs.map((index, i) => (
        <BookIndexItem key={`${index.content}_${i}`} content={index.content} page={`${index.page}p`} />
      ))}
    </BookIndexBox>
  );
};

export default BookIndex;
