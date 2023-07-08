import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@/main.css';
import '@locales/i18n';

import { SoobookRouter } from '@router/SoobookRouter';
import { initMock } from '@mocks/initMock';
import { queryClient } from '@queries/QueryClient';

if (import.meta.env.VITE_APP_MOCK) {
  await initMock();
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SoobookRouter />
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={true} />}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
