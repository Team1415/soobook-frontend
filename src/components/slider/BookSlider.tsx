import { Box, useTheme } from '@mui/material';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@components/slider/BookSlider.css';

import BookCard from '@components/card/BookCard';
import { BookCardModel } from '@models/book';

interface BookSliderProps {
  books: BookCardModel[];
}

const BookSlider = (props: BookSliderProps) => {
  const { books } = props;

  const theme = useTheme();

  return (
    <Box width={`min(calc(100vw), ${theme.breakpoints.values.sm}px)`} sx={{ backgroundColor: '#F3F3F3' }}>
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
    </Box>
  );
};

export default BookSlider;
