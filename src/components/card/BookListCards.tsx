import BookListCard from '@components/card/BookListCard';
import { BookListCardsBox } from '@components/card/BookListCards.style';
import { Book } from '@models/book';

interface BookListCardsProps {
  books: Book[];
}

const BookListCards = (props: BookListCardsProps) => {
  const { books } = props;

  return (
    <BookListCardsBox>
      {books.map((book, index) => (
        <BookListCard
          key={`${book.id}_${index}_${book.title}`}
          id={book.id}
          title={book.title}
          publisher={book.publisher}
          hashtags={book.hashtags}
          thumbnailUrl={book.thumbnailUrl}
        />
      ))}
    </BookListCardsBox>
  );
};

export default BookListCards;
