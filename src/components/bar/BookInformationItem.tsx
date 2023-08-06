import {
  BookInformationItemBox,
  ContentTypography,
  LabelTypography,
} from '@components/bar/BookInformationItem.style';

interface BookInformationItemProps {
  label: string;
  content: string;
}

const BookInformationItem = (props: BookInformationItemProps) => {
  const { label, content } = props;

  return (
    <BookInformationItemBox>
      <LabelTypography>{label}</LabelTypography>
      <ContentTypography>{content}</ContentTypography>
    </BookInformationItemBox>
  );
};

export default BookInformationItem;
