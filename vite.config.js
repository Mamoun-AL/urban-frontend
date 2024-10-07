import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is the correct output directory
  },
  server: {
    host: '0.0.0.0', // For local development, but Render will use this internally
    port: process.env.PORT || 3000,
  },
})
