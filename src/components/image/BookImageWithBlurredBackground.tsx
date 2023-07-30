import {
  BookImage,
  BookImageWithBlurredBackgroundBox,
  BooxImageContainer,
} from '@components/image/BookImageWithBlurredBackground.style';

interface BookImageWithBlurredBackgroundProps {
  imageUrl: string;
}

const BookImageWithBlurredBackground = (props: BookImageWithBlurredBackgroundProps) => {
  const { imageUrl } = props;

  return (
    <BookImageWithBlurredBackgroundBox imageUrl={imageUrl}>
      <BooxImageContainer>
        <BookImage src={imageUrl} />
      </BooxImageContainer>
    </BookImageWithBlurredBackgroundBox>
  );
};

export default BookImageWithBlurredBackground;
