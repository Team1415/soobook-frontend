import { StyledBadge } from '@components/badge/HashtagBadge.style';
import { BadgeType } from '@models/badge';

interface HashtagBadgeProps {
  type?: BadgeType;
  name: string;
}

const HashtagBadge = (props: HashtagBadgeProps) => {
  const { type = 'simple', name } = props;

  return <StyledBadge type={type} label={name} />;
};

export default HashtagBadge;
