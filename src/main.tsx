import { StrictMode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@config/QueryClient';
import { initMock } from '@mocks/initMock';
import { SoobookRouter } from '@router/SoobookRouter';

import '@/main.css';
import '@locales/i18n';

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
