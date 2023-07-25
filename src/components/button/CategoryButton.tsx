import { ReactComponent as CategoryButtonIcon } from '@assets/category-button-icon.svg';
import { StyledOffCategoryButton, StyledOnCategoryButton } from '@components/button/CategoryButton.style';

interface CategoryButtonProps {
  title: string;
  active?: boolean;
}

const CategoryButton = (props: CategoryButtonProps) => {
  const { title, active } = props;
  const StyledCategoryButton = active ? StyledOnCategoryButton : StyledOffCategoryButton;
  return (
    <StyledCategoryButton
      sx={{
        display: 'flex',
        width: '51px',
        padding: '12px 4px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
      variant={'contained'}
    >
      <CategoryButtonIcon />
      {title}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
