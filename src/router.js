import {createRouter, createWebHistory} from 'vue-router'; // 导入 Vue Router 4.x 的方式
import Home from './views/Home.vue';
import ImmigrationPage1 from './views/immigration/Page1.vue';

const routes = [
    {path: '/', component: Home},
    {
        path: '/immigration', children: [
            {path: 'British-Columbia-Provincial-Nominee-Program', component: ImmigrationPage1}
        ]
    },
];

const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 历史模式
    routes,
});

export default router;
