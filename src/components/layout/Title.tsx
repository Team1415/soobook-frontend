import { LeftBox, LeftTypography, RightTypography, TitleBox } from '@components/layout/Title.style';

interface TitleProps {
  leftLabel: string;
  rightLabel?: string;
  onClickRightLabel?: () => void;
}

const Title = (props: TitleProps) => {
  const { leftLabel, rightLabel, onClickRightLabel } = props;

  return (
    <TitleBox>
      <LeftBox>
        <LeftTypography>{leftLabel}</LeftTypography>
      </LeftBox>
      {rightLabel && <RightTypography onClick={() => onClickRightLabel?.()}>{rightLabel}</RightTypography>}
    </TitleBox>
  );
};

export default Title;
