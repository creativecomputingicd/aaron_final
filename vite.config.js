import { defineConfig } from 'vite'

export default defineConfig({
  base: "/aaron_final/",
  build: {
    rollupOptions: {
        input: ['index.html', 'app.html', 'howItWorks.html'],
        output: {
            entryFileNames: ['index.html', 'app.html', 'howItWorks.html']
        }
    },
},
});