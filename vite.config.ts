import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'polym-story-cssdata',
      fileName: (format) => `polym-story-cssdata.${format}.js`
    }
  }
})
