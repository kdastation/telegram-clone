import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export const aliases = {
  '@shared': path.resolve(__dirname, './src/shared'),
  '@entities': path.resolve(__dirname, './src/entities'),
  '@features': path.resolve(__dirname, './src/features'),
  '@pages': path.resolve(__dirname, './src/pages'),
  '@app': path.resolve(__dirname, './src/app'),
  '@widgets': path.resolve(__dirname, './src/widgets'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
})
