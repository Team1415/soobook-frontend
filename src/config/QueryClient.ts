import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
    },
  },
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      const typedError = error as Error;
      // TODO: 스낵바로 변경
      alert(`Something went wrong: ${typedError.message}`);
    },
  }),
});
