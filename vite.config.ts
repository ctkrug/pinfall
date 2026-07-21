import { defineConfig } from 'vite'

export default defineConfig({
  // Keep emitted URLs portable when Pinfall is hosted beneath a subpath.
  base: './',
})
