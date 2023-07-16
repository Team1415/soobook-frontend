import { Stack, Typography } from '@mui/material';

import { ReactComponent as SoobookLogo } from '@assets/soobook-logo.svg';

const SoobookIntroduction = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="300px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Typography fontWeight={700} textAlign="center" paddingBottom="6px">
        수북에서 수북하게
      </Typography>
      <SoobookLogo />
    </Stack>
  );
};

export default SoobookIntroduction;
