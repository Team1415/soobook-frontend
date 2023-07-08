import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@locales', replacement: '/src/locales' },
      { find: '@mocks', replacement: '/src/mocks' },
      { find: '@models', replacement: '/src/models' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@queries', replacement: '/src/queries' },
      { find: '@router', replacement: '/src/router' },
      { find: '@stores', replacement: '/src/stores' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@', replacement: '/src' },
    ],
  },
});
