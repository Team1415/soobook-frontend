import { useTranslation } from 'react-i18next';

import { ReactComponent as ChevronLeftIcon } from '@assets/chevron-left-icon.svg';
import { ReactComponent as MenuIcon } from '@assets/menu-icon.svg';
import {
  BackArrowBox,
  BookDetailHeaderBox,
  EllipsisTypography,
  MenuBox,
} from '@components/header/BookDetailHeader.style';

const BookDetailHeader = () => {
  const { t } = useTranslation();

  return (
    <BookDetailHeaderBox>
      <BackArrowBox>
        <ChevronLeftIcon />
      </BackArrowBox>
      <EllipsisTypography variant='h6'>{t('detail-page.title.book-detail')}</EllipsisTypography>
      <MenuBox>
        <MenuIcon />
      </MenuBox>
    </BookDetailHeaderBox>
  );
};

export default BookDetailHeader;
