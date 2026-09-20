import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at https://<user>.github.io/Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
