import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from 'unplugin-element-plus/vite'
import {resolve, join} from "path";

export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, "src"),
        }
    },
    plugins: [vue(), vueJsx(), ElementPlus()],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                home: resolve(__dirname, 'Home/index.html'),
                immigration: resolve(__dirname, 'Immigration/index.html'),
                page1: resolve(__dirname, 'Immigration/Page1/index.html'),
                page2: resolve(__dirname, 'Immigration/Page2/index.html'),
                page3: resolve(__dirname, 'Immigration/Page3/index.html'),
                page4: resolve(__dirname, 'Immigration/Page4/index.html'),
                page5: resolve(__dirname, 'Immigration/Page5/index.html'),
                page6: resolve(__dirname, 'Immigration/Page6/index.html'),
                page7: resolve(__dirname, 'Immigration/Page7/index.html'),
                page8: resolve(__dirname, 'Immigration/Page8/index.html'),
                page9: resolve(__dirname, 'Immigration/Page9/index.html'),
                page10: resolve(__dirname, 'Immigration/Page10/index.html'),
                page11: resolve(__dirname, 'Immigration/Page11/index.html'),
            },
            output: {
                manualChunks: {
                    vue: ['vue', 'vue-router'],
                    elementPlus: ['element-plus'],
                    core: ['core-js']
                },
            }
        }
    }
});
