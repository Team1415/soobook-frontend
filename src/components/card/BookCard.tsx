import { Stack, Typography } from '@mui/material';
import { get } from 'lodash-es';

import HashtagChip from '@components/chip/HashtagChip';
import Space from '@components/layout/Space';
import { BookCardModel } from '@models/book';

type BookCardProps = BookCardModel;

const BookCard = (props: BookCardProps) => {
  const { imageUrl, title, hashtags } = props;

  return (
    <Stack
      style={{
        backgroundColor: '#FFFFFF',
        height: '202px',
        width: '120px',
        alignItems: 'center',
        borderRadius: '8px',
      }}
    >
      <Space y={12} />
      <Stack width="calc(120px - 32px)">
        <img style={{ width: '88px', height: '128px', objectFit: 'cover' }} src={imageUrl} alt={title} />
      </Stack>
      <Space y={12} />
      <Stack display="block" width="calc(120px - 24px)">
        <Typography fontSize="12px" fontWeight="700" noWrap={true}>
          {title}
        </Typography>
      </Stack>
      <Stack display="block" width="calc(120px - 24px)" direction="row" spacing={4}>
        {get(hashtags, '0') && <HashtagChip name={hashtags[0]} />}
        {get(hashtags, '1') && <HashtagChip name={hashtags[1]} />}
      </Stack>
    </Stack>
  );
};

export default BookCard;
