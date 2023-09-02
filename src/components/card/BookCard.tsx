import { useCallback } from 'react';

import { Typography } from '@mui/material';
import { get } from 'lodash-es';
import { useLocation, useNavigate } from 'react-router-dom';

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

interface BookCardProps extends BookCardModel {
  preventOnClick: boolean;
}

const BookCard = (props: BookCardProps) => {
  const { thumbnailUrl, title, hashtags, id, preventOnClick } = props;

  const location = useLocation();

  console.log('location', location.pathname);

  const navigate = useNavigate();

  const onClickCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (preventOnClick) {
        e.stopPropagation();
        return;
      }

      const newUrl = `/book/${id}`;
      navigate(newUrl, { replace: location.pathname === newUrl });
    },
    [id, preventOnClick],
  );

  return (
    <BookCardStack onClick={onClickCard}>
      <Space y={12} />
      <ImageStack>
        <StyledImage src={thumbnailUrl} alt={title} />
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
