import HashtagBadge from '@components/badge/HashtagBadge';
import {
  BookListBodyStack,
  BookListImage,
  BookListImageStack,
  BookListPublisherTypography,
  BookListTitleTypography,
  StyledBookListCardStack,
  StyledBookListHashtagStack,
} from '@components/card/BookListCard.style';
import Space from '@components/layout/Space';
import { BookListCardModel } from '@models/book';

type BookListCardProps = BookListCardModel;

const BookListCard = (props: BookListCardProps) => {
  const { publisher, thumbnail, title, hashtags } = props;

  return (
    <StyledBookListCardStack>
      <BookListImageStack>
        <BookListImage src={thumbnail} alt={title} />
      </BookListImageStack>
      <BookListBodyStack>
        <Space y={3} />
        <BookListTitleTypography>{title}</BookListTitleTypography>
        <Space y={4} />
        <BookListPublisherTypography>{publisher}</BookListPublisherTypography>
        <Space y={13} />
        <StyledBookListHashtagStack>
          {hashtags.map((hashtag) => (
            <HashtagBadge name={hashtag.name} type='detail' key={`detail_hashtag_${hashtag.name}`} />
          ))}
        </StyledBookListHashtagStack>
      </BookListBodyStack>
    </StyledBookListCardStack>
  );
};

export default BookListCard;
