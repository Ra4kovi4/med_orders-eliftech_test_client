import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import EnvironmentPlugin from 'vite-plugin-environment'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        reactRefresh(),
        EnvironmentPlugin('all', { prefix: 'REACT_APP_' })
    ],
    base: 'http://localhost:5173',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    '404.html': ['./404.html']
                }
            }
        }
    }
})
