import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import BookCard from '@components/card/BookCard';
import { CarouselBox } from '@components/carousel/BookCarousel.style';
import { BookCardModel } from '@models/book';

interface BookCarouselProps {
  books: BookCardModel[];
}

const BookCarousel = (props: BookCarouselProps) => {
  const { books } = props;

  return (
    <CarouselBox>
      <Slider
        className="slider variable-width"
        infinite={false}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
        variableWidth={true}
        arrows={false}
      >
        {books.map((book, index) => (
          <div key={`${book.title}_${index}`}>
            <BookCard {...book} />
          </div>
        ))}
      </Slider>
    </CarouselBox>
  );
};

export default BookCarousel;
