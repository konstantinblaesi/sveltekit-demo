import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {resolve} from "path"

export default defineConfig({
    plugins: [svelte({hot: !process.env.VITEST})],
    test: {
        alias: {
            "$lib": resolve("src/lib")
        },
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        globals: true,
        environment: 'jsdom',
    },
})