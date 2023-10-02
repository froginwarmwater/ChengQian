import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
    plugins: [vue(), vueJsx(), ElementPlus()],
    build: {
        rollupOptions: {
            manualChunks: {
                vue: ['vue', 'vue-router'],
                elementPlus: ['element-plus'],
                core: ['core-js']
            },
        }
    }
});