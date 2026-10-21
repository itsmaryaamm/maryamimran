import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/* GitHub Pages serves a project site from /<repo>/, so every asset URL needs
   that prefix. BASE_PATH is set by the Pages workflow from the repo name; it
   stays "/" for local dev and for a custom domain. */
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      /* A static host has no SPA rewrite, so /business is a miss. Writing a
         real index.html into a directory per route means the host serves a
         200 with the right page and the router takes over from there —
         correct status codes and crawlable, rather than relying on the
         404.html trick. 404.html is still written as the catch-all for
         genuinely unknown paths. Routes are read from App.tsx so this list
         cannot drift from the router. */
      name: 'static-route-pages',
      closeBundle() {
        const index = 'dist/index.html'
        if (!existsSync(index)) return
        const html = readFileSync(index)

        const app = readFileSync('src/App.tsx', 'utf8')
        const routes = [...app.matchAll(/path="(\/[^"*]*)"/g)]
          .map((m) => m[1])
          .filter((r) => r !== '/')

        for (const route of routes) {
          const dir = join('dist', route)
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), html)
        }
        writeFileSync('dist/404.html', html)
        console.log(`  static routes: ${routes.join(', ')}`)
      },
    },
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep the framework and the motion library in their own long-lived
        // chunks so content edits don't invalidate them.
        advancedChunks: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router)/ },
            { name: 'motion', test: /node_modules[\\/](framer-)?motion/ },
          ],
        },
      },
    },
  },
})
