import { QueryCache, QueryClient } from '@tanstack/react-query';
import { get } from 'lodash-es';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
      select: (data: unknown) => get(data, ['body', 'result']),
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
