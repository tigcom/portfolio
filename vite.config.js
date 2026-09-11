import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

import generateSitemap from 'vite-ssg-sitemap'

const projects = JSON.parse(fs.readFileSync(path.resolve(__dirname, './src/data/projects.json'), 'utf-8'))
const templates = JSON.parse(fs.readFileSync(path.resolve(__dirname, './src/data/templates.json'), 'utf-8'))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes(paths, routes) {
      const dynamicRoutes = [
        ...projects.map(p => `/projects/${p.slug}`),
        ...templates.map(t => `/marketplace/${t.slug}`),
        ...templates.map(t => `/marketplace/${t.slug}/demo`)
      ]
      return paths.filter(p => !p.includes(':')).concat(dynamicRoutes)
    },
    onFinished() {
      generateSitemap({
        hostname: 'https://portfolio-qem.pages.dev',
        outDir: 'dist'
      })
    }
  }
})
