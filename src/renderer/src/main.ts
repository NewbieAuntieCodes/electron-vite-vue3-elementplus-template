import './assets/main.css'
import 'element-plus/dist/index.css' // 引入 Element Plus 的完整 CSS (如果按需引入的样式不全)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入我们创建的 router

const app = createApp(App)

app.use(router) // 告诉 Vue 应用使用这个路由

app.mount('#app')
