import { StyledBadge } from '@components/badge/HashtagBadge.style';

interface HashtagBadgeProps {
  name: string;
}

const HashtagBadge = (props: HashtagBadgeProps) => {
  const { name } = props;

  return <StyledBadge label={name} />;
};

export default HashtagBadge;
