import { BookIndexItemBox, ContentTypography, PageTypography } from '@components/bar/BookIndexItem.style';

interface BookIndexItemProps {
  content: string;
  page: string;
}

const BookIndexItem = (props: BookIndexItemProps) => {
  const { content, page } = props;

  return (
    <BookIndexItemBox>
      <ContentTypography>{content}</ContentTypography>
      <PageTypography>{page}</PageTypography>
    </BookIndexItemBox>
  );
};

export default BookIndexItem;
