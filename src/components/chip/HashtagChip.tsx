import { StyledChip } from '@components/chip/HashtagChip.style';

interface HashtagChipProps {
  name: string;
}

const HashtagChip = (props: HashtagChipProps) => {
  const { name } = props;

  return <StyledChip label={name} />;
};

export default HashtagChip;
