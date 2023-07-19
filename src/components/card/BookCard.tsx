import { Typography } from '@mui/material';
import { get } from 'lodash-es';

import {
  BookCardStack,
  HashtagStack,
  ImageStack,
  StyledImage,
  TitleStack,
} from '@components/card/BookCard.style';
import HashtagChip from '@components/chip/HashtagChip';
import Space from '@components/layout/Space';
import { BookCardModel } from '@models/book';

type BookCardProps = BookCardModel;

const BookCard = (props: BookCardProps) => {
  const { imageUrl, title, hashtags } = props;

  return (
    <BookCardStack>
      <Space y={12} />
      <ImageStack>
        <StyledImage src={imageUrl} alt={title} />
      </ImageStack>
      <Space y={12} />
      <TitleStack>
        <Typography variant="h6" noWrap={true}>
          {title}
        </Typography>
      </TitleStack>
      <HashtagStack direction="row" spacing={4}>
        {get(hashtags, '0') && <HashtagChip name={hashtags[0]} />}
        {get(hashtags, '1') && <HashtagChip name={hashtags[1]} />}
      </HashtagStack>
    </BookCardStack>
  );
};

export default BookCard;
