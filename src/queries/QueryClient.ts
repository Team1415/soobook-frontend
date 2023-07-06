import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { join, toLower } from 'lodash-es';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

        if (queryKey.length === 0) {
          throw new Error('Invalid QueryKey');
        }

        const { data } = await axios.get(`${baseUrl}/api/${toLower(join(queryKey, '/'))}`);
        return data as unknown;
      },
    },
  },
});
