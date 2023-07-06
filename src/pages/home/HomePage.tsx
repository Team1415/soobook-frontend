import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return <>{t('home-page.title.page-name')}</>;
};

export default HomePage;
