import { Button, ButtonProps, styled } from '@mui/material';

interface Props {
  active?: boolean;
}

const CategoryDefaultStyleButton = (props: ButtonProps) => {
  return (
    <Button
      sx={{
        display: 'flex',
        width: '51px',
        padding: '12px 4px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
      variant={'contained'}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const StyledCategoryButton = styled(CategoryDefaultStyleButton)((props: Props) => ({
  background: props.active ? '#203C8E' : '#FFF',
  border: props.active ? undefined : '1px solid #E4E4E4',
  borderRadius: '4px',
  color: props.active ? '#FFFFFF' : '#464646',
  '&:hover': {
    backgroundColor: props.active ? '#203C8E' : '#FFF',
  },
}));
