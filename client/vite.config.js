import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the output directory is 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://eventhub-backend-14dq.onrender.com',
        changeOrigin: true,
        secure: false, // Useful for dealing with self-signed certificates in development
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
