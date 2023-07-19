import { Typography } from '@mui/material';

import SoobookAvartar from '@components/avartar/SoobookAvartar';
import { TypoBox, UserHeaderBox } from '@components/header/UserHeader.style';

const UserHeader = () => {
  // TODO : login 여부에 따라 비회원 / 회원 보여주는 게 달라지도록 변경
  const userName = sessionStorage.getItem('user-name') || undefined;

  return (
    <UserHeaderBox>
      <TypoBox>
        {userName ? (
          <>
            <Typography variant="h5" whiteSpace="pre">
              {'안녕하세요 '}
            </Typography>
            <Typography variant="h5" fontWeight="700">
              {userName}
            </Typography>
            <Typography variant="h5">님</Typography>
          </>
        ) : (
          <Typography variant="h5">수북의 서비스를 둘러보세요</Typography>
        )}
      </TypoBox>

      <SoobookAvartar name={userName} />
    </UserHeaderBox>
  );
};

export default UserHeader;
