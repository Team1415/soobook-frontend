import { Stack } from '@mui/material';

import { PopularBox, PopularCategoryBox, PopularItem } from '@components/bar/PopularCategory.style';

interface Category {
  name: string;
  onClick?: () => void;
}

interface PopularCategoryProps {
  categories?: Category[];
}

const PopularCategory = (props: PopularCategoryProps) => {
  const { categories = [] } = props;

  return (
    <PopularCategoryBox>
      <PopularBox>{'인기'}</PopularBox>
      <Stack direction="row">
        {categories.map((category, index) => (
          <PopularItem key={`${category.name}_${index}`} onClick={() => category.onClick?.()}>
            {`#${category.name}`}
          </PopularItem>
        ))}
      </Stack>
    </PopularCategoryBox>
  );
};

export default PopularCategory;
