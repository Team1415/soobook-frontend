import { StyledBadge, StyledDeleteBadge } from '@components/badge/HashtagBadge.style';
import { BadgeType } from '@models/badge';

interface HashtagBadgeProps {
  type?: BadgeType;
  name: string;
  onDelete?: () => void;
}

const HashtagBadge = (props: HashtagBadgeProps) => {
  const { type = 'simple', name, onDelete } = props;

  return onDelete ? (
    <StyledDeleteBadge variant="outlined" label={name} onDelete={onDelete} />
  ) : (
    <StyledBadge type={type} label={name} />
  );
};

export default HashtagBadge;
