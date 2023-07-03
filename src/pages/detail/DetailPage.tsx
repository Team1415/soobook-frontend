import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { isbn = '' } = useParams();

  return <>{`DetailPage ${isbn}`}</>;
};

export default DetailPage;
