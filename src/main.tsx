import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/main.css';

import { SoobookRouter } from '@router/SoobookRouter';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SoobookRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
