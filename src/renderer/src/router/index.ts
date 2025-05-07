import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue' // 如果保留

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    // 如果保留 About 页面
    path: '/about',
    name: 'About',
    component: AboutPage
  }
  // 未来新项目可以在此基础上添加更多路由
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 注意 Electron-Vite 通常使用 createWebHashHistory
  routes
})

export default router
