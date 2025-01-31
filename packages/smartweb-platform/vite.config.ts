import react from '@vitejs/plugin-react';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import AntdResolver from 'unplugin-auto-import-antd';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
const resolve = (p: string) => path.resolve(__dirname, p);
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react', 'react-i18next', 'react-router-dom'],
      dts: './src/auto-imports.d.ts',
      resolvers: [AntdResolver()],
    }),
    Pages({
      exclude: ['**/helper/**', '**/components/**'],
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: 30614,
    host: '0.0.0.0',
    proxy: {
      '^/graphql|^/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
});
