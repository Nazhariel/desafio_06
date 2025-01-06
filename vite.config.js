import { resolve } from 'path'

export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                mario: resolve(__dirname, 'pages/mario/index.html'),
                mk11: resolve(__dirname, 'pages/mk11/index.html'),
            }
        }
    }
}