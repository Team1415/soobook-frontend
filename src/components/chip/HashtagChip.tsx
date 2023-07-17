import { Chip } from '@mui/material';

interface HashtagChipProps {
  name: string;
}

const HashtagChip = (props: HashtagChipProps) => {
  const { name } = props;

  return (
    <Chip
      label={name}
      style={{
        backgroundColor: '#F2F2F2',
        fontSize: '10px',
        fontWeight: '400',
        letterSpacing: '-0.28px',
        lineHeight: 'normal',
        height: '19px',
        maxWidth: '46px',
        border: '0px none',
        borderRadius: '8px',
        margin: '4',
        color: '#203C8E',
        whiteSpace: 'nowrap',
      }}
      sx={{
        '& .MuiChip-label': {
          paddingLeft: '4px',
          paddingRight: '4px',
        },
      }}
    />
  );
};

export default HashtagChip;
