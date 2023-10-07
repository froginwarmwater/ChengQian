import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import App from './index.vue';
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import '@/assets/css/main.css'

const app = createApp(App);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

