import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT || 3000, // Use the port provided by Render or fallback to 3000 for local development
  },
})
