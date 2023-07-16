import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import UserHeader from '@components/header/UserHeader';
import { Book } from '@models/book';
import { BookService } from '@services/BookService';

const HomePage = () => {
  const { data, isLoading } = useQuery<Book[]>(['books', 'new'], BookService.getNewestBooks);
  const { t } = useTranslation();

  if (isLoading) {
    return <>{t('common.message.is-loading')}</>;
  } else {
    console.log('data', data);
    return (
      <>
        <UserHeader />
        {t('home-page.title.page-name')}
      </>
    );
  }
};

export default HomePage;
