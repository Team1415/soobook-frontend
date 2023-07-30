import { Box } from '@mui/material';

import { ReactComponent as DownArrowIcon } from '@assets/down-arrow-icon.svg';
import { StyledTypography } from '@components/select/SortSelect.style';

// TODO: Sort 기준 정의된 뒤 구현
const SortSelect = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <StyledTypography>발행순</StyledTypography>
      <DownArrowIcon />
    </Box>
  );
};

export default SortSelect;
