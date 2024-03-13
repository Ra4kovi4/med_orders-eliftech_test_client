import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        reactRefresh(),
        EnvironmentPlugin('all', { prefix: 'REACT_APP_' })
    ]
})
