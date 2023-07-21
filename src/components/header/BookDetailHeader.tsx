import { ReactComponent as ChevronLeftIcon } from '@assets/chevron-left-icon.svg';
import { ReactComponent as MenuIcon } from '@assets/menu-icon.svg';
import {
  BackArrowBox,
  BookDetailHeaderBox,
  EllipsisTypography,
  MenuBox,
} from '@components/header/BookDetailHeader.style';

interface BookDetailHeaderProps {
  title: string;
}

const BookDetailHeader = (props: BookDetailHeaderProps) => {
  const { title } = props;

  return (
    <BookDetailHeaderBox>
      <BackArrowBox>
        <ChevronLeftIcon />
      </BackArrowBox>
      <EllipsisTypography variant="h6">{title}</EllipsisTypography>
      <MenuBox>
        <MenuIcon />
      </MenuBox>
    </BookDetailHeaderBox>
  );
};

export default BookDetailHeader;
