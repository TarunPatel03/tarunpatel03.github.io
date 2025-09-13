import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base for GitHub Pages so assets resolve under /<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/tarunpatel03.github.io/',
})
