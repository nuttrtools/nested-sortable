import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(),dts({ include: "src" })],
  build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'nested-sortable',
            formats: ['es', 'umd'],
            fileName: (format) => `ns.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
})
