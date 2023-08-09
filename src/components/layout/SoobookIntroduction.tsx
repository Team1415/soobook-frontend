import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ReactComponent as SoobookLogo } from '@assets/soobook-logo.svg';
import { SoobookIntroductionStack } from '@components/layout/SoobookIntroduction.style';

const SoobookIntroduction = () => {
  const { t } = useTranslation();

  return (
    <SoobookIntroductionStack>
      <Typography variant='h4' align='center' paddingBottom={6}>
        {t('common.message.introduction')}
      </Typography>
      <SoobookLogo />
    </SoobookIntroductionStack>
  );
};

export default SoobookIntroduction;
