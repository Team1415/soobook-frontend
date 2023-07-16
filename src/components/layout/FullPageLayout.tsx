import { FC, PropsWithChildren } from 'react';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import SoobookIntroduction from '@components/layout/SoobookIntroduction';
import Space from '@components/layout/Space';
import NavigationBar from '@components/navigation/NavigationBar';

const FullPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const isPc = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box display="flex" justifyContent="center">
      {isPc && (
        <>
          <SoobookIntroduction />
          <Space x={100} />
        </>
      )}
      <Box width={theme.breakpoints.values.sm} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
        {children}
      </Box>
    </Box>
  );
};

export default FullPageLayout;
