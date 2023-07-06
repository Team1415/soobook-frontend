import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['books', 'new'],
    // queryFn: () => axios.get('http://localhost:8080/api/books/new').then((res) => res.data),
  });

  if (isLoading) {
    return <>is loading</>;
  } else {
    console.log('data', data);
    return <>HomePage</>;
  }
};

export default HomePage;
