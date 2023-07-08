import { useTranslation } from 'react-i18next';

const SearchPage = () => {
  const { t } = useTranslation();

  return <>{t('search-page.title.page-name')}</>;
};

export default SearchPage;
