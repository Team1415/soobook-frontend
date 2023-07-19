import { FC, PropsWithChildren } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import { FullPageLayoutBox, PageBox } from '@components/layout/FullPageLayout.style';
import SoobookIntroduction from '@components/layout/SoobookIntroduction';
import Space from '@components/layout/Space';

const FullPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const isPc = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <FullPageLayoutBox>
      {isPc && (
        <>
          <SoobookIntroduction />
          <Space x={100} />
        </>
      )}
      <PageBox>{children}</PageBox>
    </FullPageLayoutBox>
  );
};

export default FullPageLayout;
