import HashtagBadge from '@components/badge/HashtagBadge';
import { BookDetailTitleBox, HashtagBox, TitleTypography } from '@components/bar/BookDetailTitle.style';

interface BookDetailTitleProps {
  title: string;
  hashtags: string[];
}

const BookDetailTitle = (props: BookDetailTitleProps) => {
  const { title, hashtags } = props;

  return (
    <BookDetailTitleBox>
      <TitleTypography>{title}</TitleTypography>
      <HashtagBox>
        {hashtags.map((hashtag, index) => (
          <HashtagBadge key={`${hashtag}_${index}`} type="detail" name={hashtag} />
        ))}
      </HashtagBox>
    </BookDetailTitleBox>
  );
};

export default BookDetailTitle;
