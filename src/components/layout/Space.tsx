import { Box } from '@mui/material';

interface SpaceProps {
  x?: number;
  y?: number;
}

const Space = (props: SpaceProps) => {
  const { x, y } = props;

  return <Box width={x ? `${x}px` : undefined} height={y ? `${y}px` : undefined} />;
};

export default Space;
