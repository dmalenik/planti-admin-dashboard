import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // loads site on GitHub
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          reactIcons: ["react-icons"]
        },
      },
    },
  },
});
