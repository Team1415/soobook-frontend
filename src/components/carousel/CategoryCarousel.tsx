import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactComponent as ComputerIcon } from '@assets/category-computer-button-icon.svg';
import CategoryButton from '@components/button/CategoryButton';
import { CarouselBox } from '@components/carousel/CategoryCarousel.style';
import useSlide from '@hooks/useSlide';
import { Category } from '@models/category';
import { CategoryService } from '@services/CategoryService';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const CategoryCarousel = () => {
  const { data: categories } = useQuery<Category[]>(['categories'], () => CategoryService.getCategories());

  const { t } = useTranslation();
  const { dragging, handleBeforeChange, handleAfterChange } = useSlide();
  const { categoryIndex, setCategoryIndex } = useHashtagSearchConditionStore();

  return (
    <CarouselBox>
      <Slider
        className='slider variable-width'
        infinite={false}
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth={true}
        arrows={false}
        touchThreshold={100}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
        draggable
      >
        {categories?.map((category, index) => (
          <div key={`${category.name}_${index}`}>
            <CategoryButton
              title={category.name}
              icon={<ComputerIcon />}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                if (dragging) {
                  e.stopPropagation();
                  return;
                }

                if (category.useYn === 'N') {
                  alert(t('common.message.coming-soon'));
                  return;
                }

                setCategoryIndex(category.id);
              }}
              active={category.id === categoryIndex}
            />
          </div>
        ))}
      </Slider>
    </CarouselBox>
  );
};

export default CategoryCarousel;
