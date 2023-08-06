import HashtagBadge from '@components/badge/HashtagBadge';
import { BookDetailTitleBox, HashtagBox, TitleTypography } from '@components/bar/BookDetailTitle.style';
import { Hashtag } from '@models/hashtag';

interface BookDetailTitleProps {
  title: string;
  hashtags: Hashtag[];
}

const BookDetailTitle = (props: BookDetailTitleProps) => {
  const { title, hashtags } = props;

  return (
    <BookDetailTitleBox>
      <TitleTypography>{title}</TitleTypography>
      <HashtagBox>
        {hashtags.map((hashtag, index) => (
          <HashtagBadge key={`${hashtag.name}_${index}`} type='detail' name={hashtag.name} />
        ))}
      </HashtagBox>
    </BookDetailTitleBox>
  );
};

export default BookDetailTitle;
