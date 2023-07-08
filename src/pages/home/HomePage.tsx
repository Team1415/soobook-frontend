import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['books', 'new'],
    // queryFn: () => axios.get('http://localhost:8080/api/books/new').then((res) => res.data),
  });
  const { t } = useTranslation();

  if (isLoading) {
    return <>is loading</>;
  } else {
    console.log('data', data);
  return <>{t('home-page.title.page-name')}</>;
  }
};

export default HomePage;
