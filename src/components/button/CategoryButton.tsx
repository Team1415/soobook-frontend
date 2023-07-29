import { MouseEventHandler, ReactNode } from 'react';

import { StyledCategoryButton } from '@components/button/CategoryButton.style';


interface Props {
  title: string;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  active?: boolean;
}

const CategoryButton = (props: Props) => {
  const { title, icon, onClick, active } = props;
  return (
    <StyledCategoryButton active={active} onClick={onClick}>
      {icon}
      {title}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
