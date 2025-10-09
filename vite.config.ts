import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 ADD THIS LINE — use your repo name exactly
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    "deploy": "gh-pages -d build"
,
  },
  server: {
    port: 3000,
    open: true,
  },
});
