import { Typography } from '@mui/material';
import { get } from 'lodash-es';
import { useNavigate } from 'react-router-dom';

import HashtagBadge from '@components/badge/HashtagBadge';
import {
  BookCardStack,
  HashtagStack,
  ImageStack,
  StyledImage,
  TitleStack,
} from '@components/card/BookCard.style';
import Space from '@components/layout/Space';
import { BookCardModel } from '@models/book';

type BookCardProps = BookCardModel;

const BookCard = (props: BookCardProps) => {
  const { thumbnail, title, hashtags, id } = props;

  const navigate = useNavigate();

  return (
    <BookCardStack onClick={() => navigate(`/book/${id}`)}>
      <Space y={12} />
      <ImageStack>
        <StyledImage src={thumbnail} alt={title} />
      </ImageStack>
      <Space y={12} />
      <TitleStack>
        <Typography variant='h6' noWrap={true}>
          {title}
        </Typography>
      </TitleStack>
      <HashtagStack direction='row' spacing={4}>
        {get(hashtags, '0') && <HashtagBadge name={hashtags[0].name} />}
        {get(hashtags, '1') && <HashtagBadge name={hashtags[1].name} />}
      </HashtagStack>
    </BookCardStack>
  );
};

export default BookCard;
