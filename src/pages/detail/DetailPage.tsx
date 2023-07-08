import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { isbn = '' } = useParams();
  const { t } = useTranslation();

  return <>{`${t('detail-page.title.page-name')} ${isbn}`}</>;
};

export default DetailPage;
