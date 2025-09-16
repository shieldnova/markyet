import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcss from '@tailwindcss/postcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),postcss()],
})
