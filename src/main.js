import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'; // 使用 Element Plus 替代 Element UI
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式

const app = createApp(App);

app.use(router);
app.use(ElementPlus); // 使用 Element Plus 插件

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

app.config.productionTip = false; // 设置 Vue.config.productionTip

