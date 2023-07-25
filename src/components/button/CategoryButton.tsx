import { ReactComponent as CategoryButtonIcon } from '@assets/category-button-icon.svg';
import { StyledCategoryButton } from '@components/button/CategoryButton.style';

interface CategoryButtonProps {
  title: string;
  active?: boolean;
}

const CategoryButton = (props: CategoryButtonProps) => {
  const { title, active } = props;
  return (
    <StyledCategoryButton active={active}>
      <CategoryButtonIcon />
      {title}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
