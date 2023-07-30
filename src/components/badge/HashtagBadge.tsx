import { StyledBadge, StyledDeleteBadge } from '@components/badge/HashtagBadge.style';
import { BadgeType } from '@models/badge';

interface HashtagBadgeProps {
  type?: BadgeType;
  name: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onDelete?: () => void;
}

const HashtagBadge = (props: HashtagBadgeProps) => {
  const { type = 'simple', name, onClick, onDelete } = props;

  return onDelete ? (
    <StyledDeleteBadge variant="outlined" label={name} onClick={onClick} onDelete={onDelete} />
  ) : (
    <StyledBadge type={type} label={name} onClick={onClick} />
  );
};

export default HashtagBadge;
