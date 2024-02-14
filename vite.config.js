import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  //base: "/aaron_final/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/app.html'),
      },
    },
  },
});