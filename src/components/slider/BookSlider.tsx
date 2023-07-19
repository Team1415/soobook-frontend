import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BookCard from '@components/card/BookCard';
import { SliderBox } from '@components/slider/BookSlider.style';
import { BookCardModel } from '@models/book';

interface BookSliderProps {
  books: BookCardModel[];
}

const BookSlider = (props: BookSliderProps) => {
  const { books } = props;

  return (
    <SliderBox>
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
    </SliderBox>
  );
};

export default BookSlider;
