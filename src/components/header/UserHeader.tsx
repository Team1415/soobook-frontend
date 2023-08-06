import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import SoobookAvartar from '@components/avartar/SoobookAvartar';
import { TypoBox, UserHeaderBox } from '@components/header/UserHeader.style';

const UserHeader = () => {
  const { t } = useTranslation();

  // TODO : login 여부에 따라 비회원 / 회원 보여주는 게 달라지도록 변경
  const userName = sessionStorage.getItem('user-name') || undefined;

  return (
    <UserHeaderBox>
      <TypoBox>
        {userName ? (
          <>
            <Typography variant='h5' whiteSpace='pre'>
              {t('common.message.hello')}
            </Typography>
            <Typography variant='h5' fontWeight='700'>
              {userName}
            </Typography>
            <Typography variant='h5'>{t('common.message.sir')}</Typography>
          </>
        ) : (
          <Typography variant='h5'>{t('common.message.introduce')}</Typography>
        )}
      </TypoBox>

      <SoobookAvartar name={userName} />
    </UserHeaderBox>
  );
};

export default UserHeader;
