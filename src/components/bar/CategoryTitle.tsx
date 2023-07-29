import { useTranslation } from 'react-i18next';

import {
  CategoryTypography,
  LeftBox,
  LeftTypography,
  RightTypography,
  TitleBox,
} from '@components/bar/Title.style';

interface CategoryTitleProps {
  category: string;
  rightLabel?: string;
  onClickRightLabel?: () => void;
}

const CategoryTitle = (props: CategoryTitleProps) => {
  const { category, rightLabel, onClickRightLabel } = props;

  const { t } = useTranslation();

  return (
    <TitleBox>
      <LeftBox>
        <CategoryTypography>{t('home-page.label.category', { title: category })}</CategoryTypography>
        <LeftTypography>{t('home-page.label.popular-book')}</LeftTypography>
      </LeftBox>
      {rightLabel && <RightTypography onClick={() => onClickRightLabel?.()}>{rightLabel}</RightTypography>}
    </TitleBox>
  );
};

export default CategoryTitle;
