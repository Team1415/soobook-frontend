import { useTranslation } from 'react-i18next';

import {
  BookIntroductionBox,
  ContentTypography,
  TitleTypography,
} from '@components/bar/BookIntroduction.style';
import Space from '@components/layout/Space';

interface BookIntroductionProps {
  type: 'introduction' | 'index';
  content: string;
}

const BookIntroduction = (props: BookIntroductionProps) => {
  const { type, content } = props;

  const { t } = useTranslation();

  return (
    <BookIntroductionBox>
      <TitleTypography>{t(`detail-page.title.${type}`)}</TitleTypography>
      <Space y={10} />
      <ContentTypography>{content}</ContentTypography>
    </BookIntroductionBox>
  );
};

export default BookIntroduction;
