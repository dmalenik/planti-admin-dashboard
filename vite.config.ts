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
          video: ['src/shared/assets/Top/crop_720/rainyVideo_crop_720.mp4']
        },
      },
    },
  },
});
