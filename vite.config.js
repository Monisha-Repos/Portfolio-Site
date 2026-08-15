import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // Ensure a single React instance (adding @formspree/react can otherwise
    // pull in a duplicate copy, which breaks hooks).
    resolve: {
        dedupe: ['react', 'react-dom'],
    },
    server: {
        watch: {
            ignored: ['**/.vs/**']
        }
    }
})

