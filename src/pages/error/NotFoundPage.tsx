import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <>{t('not-found-page.title.page-name')}</>;
};

export default NotFoundPage;
