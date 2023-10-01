import { createRouter, createWebHistory } from 'vue-router'; // 导入 Vue Router 4.x 的方式
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
];

const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 历史模式
    routes,
});

export default router;
