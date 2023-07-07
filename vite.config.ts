import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    exclude: ['react-icons'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactIcons: ['react-icons'],
          videos: ['./src/shared/assets/videos'],
        },
      },
    },
  },
});
