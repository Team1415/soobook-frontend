import { FC, PropsWithChildren } from 'react';

import NavigationBar from '@components/navigation/NavigationBar';

const FullPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <>{children}</>
    </>
  );
};

export default FullPageLayout;
