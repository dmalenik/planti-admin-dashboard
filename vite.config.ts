import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dmalenik.github.io/',
  plugins: [react()],
  optimizeDeps: {
    force: true,
    exclude: ['react-icons', 'src/shared/data/*.tsx', 'src/templates/*.tsx'],
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          reactIcons: ['react-icons'],
          dashboardData: ['./src/shared/data/'],
          bodyTemplates: ['./src/templates/Body/'],
        },
      },
    },
  },
});
