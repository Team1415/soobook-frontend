import { FullWidthTitleBox, StyledTypography } from '@components/layout/FullWidthTitle.style';

interface FullWidthTitleProps {
  title: string;
}

const FullWidthTitle = (props: FullWidthTitleProps) => {
  const { title } = props;

  return (
    <FullWidthTitleBox>
      <StyledTypography>{title}</StyledTypography>
    </FullWidthTitleBox>
  );
};

export default FullWidthTitle;
