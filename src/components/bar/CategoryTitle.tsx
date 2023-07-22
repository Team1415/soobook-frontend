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

  return (
    <TitleBox>
      <LeftBox>
        <CategoryTypography>{`${category} 카테고리`}</CategoryTypography>
        <LeftTypography>{' 인기책들이에요'}</LeftTypography>
      </LeftBox>
      {rightLabel && <RightTypography onClick={() => onClickRightLabel?.()}>{rightLabel}</RightTypography>}
    </TitleBox>
  );
};

export default CategoryTitle;
