import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Tell Vite to use the port Helora provides, or fallback to 5173
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    // Required to allow access from outside the container/process
    host: true, 
  },
})
